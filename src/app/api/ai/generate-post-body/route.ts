import { NextResponse } from 'next/server';

export const runtime = 'edge';

const MODEL = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
const MAX_INPUT_CHARS = 10000;

const allowedOrigins = new Set([
  'https://aariworkbackend.vercel.app',
  'https://aariworkdesigns.sanity.studio',
  'http://localhost:3333',
  'http://127.0.0.1:3333',
  'http://localhost:3000',
  process.env.SANITY_STUDIO_ORIGIN || '',
]);

function isOriginAllowed(origin: string | null): boolean {
  if (!origin) return false;
  if (allowedOrigins.has(origin)) return true;
  try {
    const url = new URL(origin);
    return (
      url.hostname.endsWith('.vercel.app') ||
      url.hostname.endsWith('.sanity.studio') ||
      url.hostname === 'localhost' ||
      url.hostname === '127.0.0.1'
    );
  } catch {
    return false;
  }
}

function corsHeaders(origin: string | null): HeadersInit {
  const allowed = origin && isOriginAllowed(origin) ? origin : 'https://aariworkbackend.vercel.app';
  return {
    'Access-Control-Allow-Origin': allowed,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Vary': 'Origin',
  };
}

function cleanText(value: unknown, max = MAX_INPUT_CHARS): string {
  return typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '';
}

function jsonResponse(body: unknown, status: number, origin: string | null) {
  return NextResponse.json(body, { status, headers: corsHeaders(origin) });
}

export async function OPTIONS(req: Request) {
  return new Response(null, { status: 204, headers: corsHeaders(req.headers.get('origin')) });
}

export async function POST(req: Request) {
  const origin = req.headers.get('origin');
  if (origin && !isOriginAllowed(origin)) {
    return jsonResponse({ error: 'Origin is not allowed.' }, 403, origin);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return jsonResponse({ error: 'Gemini is not configured. Set GEMINI_API_KEY on the server.' }, 503, origin);
  }

  try {
    const input = await req.json();
    const title = cleanText(input?.title, 300);
    const keywords = cleanText(input?.keywords, 1000);
    const brief = cleanText(input?.brief, 5000);
    const tone = cleanText(input?.tone, 300);
    const wordCount = Math.min(Math.max(Number(input?.wordCount) || 1000, 300), 4000);

    if (!brief && !keywords) {
      return jsonResponse({ error: 'Provide at least targeted keywords or a brief summary for the AI writer.' }, 400, origin);
    }

    // ── Word-count calibrated structure guidelines ──
    const minWords = Math.round(wordCount * 0.90);
    const maxWords = Math.round(wordCount * 1.10);
    let wordCountGuideline = '';
    if (wordCount >= 2500) {
      wordCountGuideline = `
- STRICT word count: between ${minWords} and ${maxWords} words. Do NOT write fewer or more.
- Write 8-12 sections (H2/H3). Each section MUST contain 3-4 fully developed, rich paragraphs (each 100-130 words).
- Provide exhaustive, actionable tutorials, specific design breakdowns, step-by-step guides, and detailed FAQ answers.
- STICK 100% TO THE USER'S SPECIFIC BRIEF. Do NOT add generic history or needle basics unless requested.`;
    } else if (wordCount >= 1800) {
      wordCountGuideline = `
- STRICT word count: between ${minWords} and ${maxWords} words. Do NOT write fewer or more.
- Write 7-9 sections (H2/H3). Each section MUST contain 3-4 detailed paragraphs (each 90-120 words).
- Deep-dive strictly into the topic and specific angles requested in the BRIEF.`;
    } else if (wordCount >= 1200) {
      wordCountGuideline = `
- STRICT word count: between ${minWords} and ${maxWords} words. Do NOT write fewer or more.
- Write 6-8 sections (H2/H3). Each section MUST contain 3 detailed paragraphs (each 80-110 words).
- Explore specific practical details, pattern breakdowns, and step-by-step methods matching the BRIEF.`;
    } else if (wordCount >= 700) {
      wordCountGuideline = `
- STRICT word count: between ${minWords} and ${maxWords} words. Do NOT write fewer or more.
- Write 4-5 sections. 2 detailed paragraphs per section, each 80-110 words.`;
    } else {
      wordCountGuideline = `
- STRICT word count: between ${minWords} and ${maxWords} words. Do NOT write fewer or more.
- Write 2-3 sections. Keep explanations concise and direct.`;
    }

    // ── Pro-writer prompt ──
    const prompt = `You are an award-winning SEO content strategist and domain expert in Aari, Zardosi, and Indian bridal embroidery. You write at a 10/10 editorial standard — unique, highly specific, and tailored precisely to the client's brief.

TASK: Write a complete, publication-ready article based STRICTLY on the brief below.

──────────────────────────────
BRIEF
──────────────────────────────
Primary Keywords: ${keywords || '(none specified)'}
Topic / Outline: ${brief || '(none specified)'}
Tone & Style: ${tone || 'Informative, beginner-friendly, and engaging'}
Draft Title: ${title || '(auto-generate one)'}
Target Word Count: ${wordCount} words
${wordCountGuideline}

──────────────────────────────
STRICT CONTENT & ANTI-DUPLICATION RULES
──────────────────────────────
1. **STRICT BRIEF ADHERENCE (NO GENERIC BOILERPLATE)**:
   - Your primary mandate is to write about the EXACT topic described in the Topic/Outline Brief and Title.
   - DO NOT write generic introductory filler, history of Aari work, or basic needle/material overviews UNLESS the brief explicitly asks for it.
   - If the brief mentions "tracing designs", "tracing patterns", or "paper transfers", focus 100% on tracing methods (carbon paper, kerosene-powder stencil, yellow tracing sheets), pattern alignment on blouse necklines/sleeves, and detailed descriptions of tracing motifs.
   - If image uploads or design patterns are referenced in the brief, include explicit image callouts/placeholders (e.g. "[Image: Description of Tracing Pattern]") in the body copy.

2. **ANTI-DUPLICATE CONTENT GUARD**:
   - Treat this article as part of an established blog. Avoid repeating standard "What is Aari Work?" intro paragraphs that exist on other posts.
   - Start directly with a captivating, topic-specific hook related to the specific title/brief.

3. **Keyword Discipline**: Use the exact primary keyword phrase 4-6 times across the article. Beyond that, ALWAYS use LSI (Latent Semantic Indexing) variations, synonyms, and related domain terms naturally.

4. **Unique Expert Voice**: Write as an expert artisan sharing practical, hands-on workshop advice. Use specific craft terminology (e.g., "yellow carbon sheet", "kerosene-tracing powder ratio", "sleeve neck outline", "pinning tracing paper to silk fabric").

5. **Structural Requirements**:
   a) Hook paragraph (NO heading above it — this is the opening)
   b) Multiple descriptive H2 and H3 subheadings matching the specific brief
   c) At least ONE numbered step-by-step how-to section
   d) At least ONE bullet list of practical tips, pattern elements, or steps
   e) A "Frequently Asked Questions" H2 section at the end with 3-5 specific Q&A pairs related to the brief topic
   f) A closing paragraph with a warm call-to-action encouraging readers to try the designs or download patterns

6. **Meta Description**: Generate a compelling 150-155 character meta description summarizing the specific topic of the article.
7. **Keyword Coverage**: Include target keywords listed in the BRIEF naturally in article body blocks.

──────────────────────────────
OUTPUT FORMAT (Sanity Portable Text JSON)
──────────────────────────────
Return ONLY valid JSON matching this exact shape:
{
  "title": "Optimized, click-worthy article title here",
  "metaDescription": "155 char max SEO meta description here",
  "body": [
    {
      "_type": "block",
      "style": "h2",
      "children": [{ "_type": "span", "text": "Section Heading", "marks": [] }]
    },
    {
      "_type": "block",
      "style": "normal",
      "children": [{ "_type": "span", "text": "Paragraph text here...", "marks": [] }]
    },
    {
      "_type": "block",
      "style": "normal",
      "listItem": "bullet",
      "children": [{ "_type": "span", "text": "Bullet item", "marks": [] }]
    },
    {
      "_type": "block",
      "style": "normal",
      "listItem": "number",
      "children": [{ "_type": "span", "text": "Numbered step", "marks": [] }]
    }
  ]
}

JSON Rules:
- Well-formed JSON only. No trailing commas.
- Do NOT include markDefs.
- Allowed styles: "normal", "h2", "h3", "h4", "blockquote".
- For bullet lists: style "normal", listItem "bullet".
- For numbered lists: style "normal", listItem "number".
- For FAQ questions use style "h3", for FAQ answers use style "normal".`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(MODEL)}:generateContent`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            temperature: 0.85,
            responseMimeType: 'application/json',
            maxOutputTokens: 8192,
          },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini article generation failed:', response.status, errorText.slice(0, 500));
      return jsonResponse({ error: 'Gemini could not generate the article right now.' }, 502, origin);
    }

    const result = await response.json();
    const text = result?.candidates?.[0]?.content?.parts?.[0]?.text;
    if (typeof text !== 'string') {
      return jsonResponse({ error: 'Gemini returned an empty response.' }, 502, origin);
    }

    // Robust JSON extraction with trailing garbage recovery
    const cleanTextResponse = text.trim();
    let parsedJson: any = null;
    try {
      parsedJson = JSON.parse(cleanTextResponse);
    } catch {
      const startObj = cleanTextResponse.indexOf('{');
      if (startObj !== -1) {
        let candidate = cleanTextResponse.substring(startObj);
        let lastEnd = candidate.lastIndexOf('}');
        while (lastEnd !== -1) {
          try {
            parsedJson = JSON.parse(candidate.substring(0, lastEnd + 1));
            break;
          } catch {
            candidate = candidate.substring(0, lastEnd);
            lastEnd = candidate.lastIndexOf('}');
          }
        }
      }
    }

    if (!parsedJson) {
      console.error('Failed to parse Gemini response text as JSON:', text);
      return jsonResponse({ error: 'Gemini returned a response that could not be parsed as valid JSON.' }, 502, origin);
    }

    if (!parsedJson.body || !Array.isArray(parsedJson.body)) {
      return jsonResponse({ error: 'Gemini returned an incomplete or invalid block object.' }, 502, origin);
    }

    return jsonResponse(parsedJson, 200, origin);
  } catch (error) {
    console.error('Gemini generate-post-body route error:', error);
    return jsonResponse({ error: 'Invalid request or Gemini response parse error.' }, 500, origin);
  }
}
