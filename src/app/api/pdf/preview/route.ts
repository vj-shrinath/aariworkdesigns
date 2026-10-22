import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const pdfId = searchParams.get('id') || searchParams.get('pdfId');

    if (!pdfId) {
      return new NextResponse('Missing ID', { status: 400 });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mnrfwgtgrajbtwzqtxss.supabase.co';
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const isUuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(pdfId);
    let query = supabase.from('pdf_marketplace').select('id, title, category, preview_images, page_count');
    if (isUuid) {
      query = query.eq('id', pdfId);
    } else {
      query = query.eq('slug', pdfId);
    }

    const { data: item } = await query.maybeSingle();

    if (item && item.preview_images && Array.isArray(item.preview_images) && item.preview_images.length > 0) {
      // Redirect to high quality static WebP preview image
      return NextResponse.redirect(item.preview_images[0], 302);
    }

    // Fallback: Generate SVG Vector Preview Card dynamically with branding
    const titleText = item ? item.title : 'Aari Work Tracing Pattern';
    const catText = item ? item.category : 'Bridal Tracing PDF';
    const pagesText = item ? `${item.page_count || 1} Pages` : 'PDF Tracing';

    const svgCard = `
      <svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800" fill="none">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#141020" />
            <stop offset="100%" stop-color="#1A152A" />
          </linearGradient>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#FCD34D" />
            <stop offset="100%" stop-color="#AA771C" />
          </linearGradient>
        </defs>
        
        <!-- Card Background -->
        <rect width="600" height="800" fill="url(#bgGrad)"/>
        
        <!-- Decorative Framing Border -->
        <rect x="24" y="24" width="552" height="752" rx="16" fill="none" stroke="rgba(212, 175, 55, 0.25)" stroke-width="2" stroke-dasharray="8 4"/>
        
        <!-- Central Motif Graphic -->
        <circle cx="300" cy="360" r="140" fill="rgba(212, 175, 55, 0.04)" stroke="rgba(212, 175, 55, 0.3)" stroke-width="1.5"/>
        <circle cx="300" cy="360" r="100" fill="rgba(212, 175, 55, 0.06)" stroke="rgba(212, 175, 55, 0.4)" stroke-width="1"/>
        <path d="M300 240 L300 480 M180 360 L420 360 M215 275 L385 445 M215 445 L385 275" stroke="rgba(212, 175, 55, 0.15)" stroke-width="1"/>
        
        <!-- PDF Icon Badge -->
        <rect x="250" y="320" width="100" height="80" rx="12" fill="url(#goldGrad)" opacity="0.9"/>
        <text x="300" y="368" text-anchor="middle" fill="#000000" font-family="Arial, sans-serif" font-weight="900" font-size="28">PDF</text>

        <!-- Watermark Branding Text -->
        <g transform="rotate(-30 300 360)" opacity="0.18">
          <text x="300" y="340" text-anchor="middle" fill="#D4AF37" font-family="Arial, sans-serif" font-weight="bold" font-size="28">AariWorkDesigns.com</text>
          <text x="300" y="380" text-anchor="middle" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="normal" font-size="16">SAMPLE TRACING PREVIEW</text>
        </g>
        
        <!-- Bottom Banner -->
        <rect x="24" y="680" width="552" height="96" fill="rgba(10, 8, 16, 0.9)" />
        <text x="44" y="720" fill="#FFFFFF" font-family="Arial, sans-serif" font-weight="bold" font-size="22">${escapeXml(titleText)}</text>
        <text x="44" y="750" fill="#D4AF37" font-family="Arial, sans-serif" font-weight="normal" font-size="16">${escapeXml(catText)} • ${escapeXml(pagesText)} • High Res Print Ready</text>
      </svg>
    `;

    return new NextResponse(svgCard, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=86400, s-maxage=604800',
      },
    });

  } catch (err) {
    return new NextResponse('Error generating preview', { status: 500 });
  }
}

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
      default: return c;
    }
  });
}
