import {NextResponse} from 'next/server'

export const runtime = 'edge'

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash'
const allowedOrigins = new Set([
  'https://aariworkbackend.vercel.app',
  'https://aariworkdesigns.sanity.studio',
  'http://localhost:3333',
  'http://127.0.0.1:3333',
  process.env.SANITY_STUDIO_ORIGIN || '',
])

function corsHeaders(origin: string | null): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin && allowedOrigins.has(origin) ? origin : 'https://aariworkbackend.vercel.app',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  }
}

function jsonResponse(body: unknown, status: number, origin: string | null) {
  return NextResponse.json(body, {status, headers: corsHeaders(origin)})
}

export async function OPTIONS(req: Request) {
  return new Response(null, {status: 204, headers: corsHeaders(req.headers.get('origin'))})
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin')
  if (!origin || !allowedOrigins.has(origin)) {
    return jsonResponse({error: 'Origin is not allowed.'}, 403, origin)
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return jsonResponse({error: 'Gemini is not configured on the website server.'}, 503, origin)
  }

  try {
    const input = await req.json()
    const locale = typeof input?.locale === 'string' ? input.locale : ''
    const title = typeof input?.title === 'string' ? input.title.slice(0, 300) : ''
    const excerpt = typeof input?.excerpt === 'string' ? input.excerpt.slice(0, 2000) : ''
    const ai = input?.ai && typeof input.ai === 'object' ? input.ai : null
    const segments = Array.isArray(input?.segments)
      ? input.segments
          .filter((item: any) => item && typeof item.id === 'string' && typeof item.text === 'string')
          .slice(0, 250)
          .map((item: any) => ({id: item.id, text: item.text.slice(0, 3000)}))
      : []

    if (!locale || !title || !segments.length) {
      return jsonResponse({error: 'A locale, title, and article text are required.'}, 400, origin)
    }

    const aiInstruction = ai ? ` Also translate this AI content and return it as an "ai" object with the same keys. Translate all human-readable strings in arrays and objects, but preserve URLs. The AI object is: ${JSON.stringify(ai)}` : ''
    const prompt = `Translate this English embroidery article into the target locale: ${locale}.
Preserve meaning, names, measurements, URLs, and technical terms. Do not add explanations or content. Return only valid JSON with this exact shape: {"title":"","excerpt":"","segments":[{"id":"same-id","text":"translated text"}]${ai ? ',"ai":{}' : ''}.
The segment IDs must be returned exactly once each and in the same order. Translate every segment. Keep headings concise and natural for native readers.

English title: ${title}
English excerpt: ${excerpt || '(none)'}
English article segments:
${JSON.stringify(segments)}`
      + aiInstruction

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent`,
      {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'x-goog-api-key': apiKey},
        body: JSON.stringify({
          contents: [{parts: [{text: prompt}]}],
          generationConfig: {temperature: 0.1, responseMimeType: 'application/json'},
        }),
      },
    )

    if (!response.ok) {
      console.error('Gemini translation failed:', response.status, (await response.text()).slice(0, 500))
      return jsonResponse({error: `Gemini translation failed for ${locale}.`}, 502, origin)
    }

    const result = await response.json()
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text
    if (typeof text !== 'string') return jsonResponse({error: 'Gemini returned an empty translation.'}, 502, origin)

    const translated = JSON.parse(text.replace(/^```json\s*|\s*```$/g, '').trim())
    if (!translated?.title || !Array.isArray(translated.segments)) {
      return jsonResponse({error: `Gemini returned an incomplete translation for ${locale}.`}, 502, origin)
    }

    return jsonResponse({
      locale,
      title: translated.title,
      excerpt: typeof translated.excerpt === 'string' ? translated.excerpt : excerpt,
      segments: translated.segments,
      ...(translated.ai && typeof translated.ai === 'object' ? {ai: translated.ai} : {}),
    }, 200, origin)
  } catch (error) {
    console.error('Gemini translation route error:', error)
    return jsonResponse({error: 'Invalid translation request or Gemini response.'}, 500, origin)
  }
}
