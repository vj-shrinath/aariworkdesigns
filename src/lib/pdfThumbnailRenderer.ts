/**
 * Utility to dynamically load PDF.js in the browser (admin client side)
 * and extract the first 1-3 pages of a PDF into watermarked WebP image Blobs.
 */

declare global {
  interface Window {
    pdfjsLib?: any;
  }
}

let pdfJsPromise: Promise<any> | null = null;

export function loadPdfJs(): Promise<any> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('PDF.js can only be loaded in the browser environment.'));
  }

  if (window.pdfjsLib) {
    return Promise.resolve(window.pdfjsLib);
  }

  if (pdfJsPromise) {
    return pdfJsPromise;
  }

  pdfJsPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js';
    script.onload = () => {
      if (window.pdfjsLib) {
        window.pdfjsLib.GlobalWorkerOptions.workerSrc =
          'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        resolve(window.pdfjsLib);
      } else {
        reject(new Error('pdfjsLib failed to attach to window object'));
      }
    };
    script.onerror = () => reject(new Error('Failed to load PDF.js script from CDN.'));
    document.head.appendChild(script);
  });

  return pdfJsPromise;
}

export interface PdfExtractionResult {
  pageCount: number;
  webpBlobs: Blob[];
}

/**
 * Render up to `maxPages` pages from a PDF file onto HTML5 Canvas,
 * apply branding watermark, and export as compressed WebP Blobs.
 */
export async function renderPdfToWebpBlobs(
  file: File,
  maxPages: number = 3,
  targetWidth: number = 1200
): Promise<PdfExtractionResult> {
  const pdfjs = await loadPdfJs();
  const fileArrayBuffer = await file.arrayBuffer();

  const loadingTask = pdfjs.getDocument({ data: fileArrayBuffer });
  const pdfDoc = await loadingTask.promise;
  const pageCount = pdfDoc.numPages;

  const pagesToRender = Math.min(pageCount, maxPages);
  const webpBlobs: Blob[] = [];

  for (let pageNum = 1; pageNum <= pagesToRender; pageNum++) {
    const page = await pdfDoc.getPage(pageNum);

    // Determine scale to achieve targetWidth (e.g. 1200px)
    const unscaledViewport = page.getViewport({ scale: 1.0 });
    const scale = targetWidth / unscaledViewport.width;
    const viewport = page.getViewport({ scale });

    // Create offscreen canvas
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(viewport.width);
    canvas.height = Math.round(viewport.height);
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      throw new Error('Could not obtain 2D canvas context for PDF rendering');
    }

    // Fill white background (PDF pages can be transparent)
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Render PDF page onto canvas
    const renderContext = {
      canvasContext: ctx,
      viewport: viewport,
    };
    await page.render(renderContext).promise;

    // Apply Watermark Overlay onto Canvas
    drawWatermarkOnCanvas(ctx, canvas.width, canvas.height, pageNum, pageCount);

    // Convert Canvas to WebP Blob (0.85 quality for sharp text and small filesize ~80-150KB)
    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob((b) => resolve(b), 'image/webp', 0.85);
    });

    if (blob) {
      webpBlobs.push(blob);
    }
  }

  return { pageCount, webpBlobs };
}

/**
 * Draw branding watermark on canvas preview
 */
function drawWatermarkOnCanvas(
  ctx: CanvasRenderingContext2D,
  width: number,
  height: number,
  pageNum: number,
  totalPages: number
) {
  ctx.save();

  // 1. Repeating diagonal grid watermark
  const sampleText = 'AariWorkDesigns.com';
  const fontSize = Math.max(20, Math.round(width * 0.04));
  ctx.font = `bold ${fontSize}px sans-serif`;
  ctx.fillStyle = 'rgba(212, 175, 55, 0.16)'; // Semi-transparent gold
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const stepX = fontSize * 12;
  const stepY = fontSize * 6;

  ctx.translate(width / 2, height / 2);
  ctx.rotate((-30 * Math.PI) / 180);
  ctx.translate(-width / 2, -height / 2);

  for (let x = -width; x < width * 2; x += stepX) {
    for (let y = -height; y < height * 2; y += stepY) {
      ctx.fillText(sampleText, x, y);
    }
  }

  ctx.restore();

  // 2. Solid Bottom Preview Banner
  const bannerHeight = Math.max(32, Math.round(height * 0.035));
  ctx.fillStyle = 'rgba(15, 12, 27, 0.92)';
  ctx.fillRect(0, height - bannerHeight, width, bannerHeight);

  // Banner text
  const bannerFontSize = Math.max(12, Math.round(bannerHeight * 0.42));
  ctx.font = `bold ${bannerFontSize}px sans-serif`;
  ctx.fillStyle = '#D4AF37'; // Gold
  ctx.textAlign = 'left';
  ctx.textBaseline = 'middle';
  ctx.fillText(
    `SAMPLE PREVIEW • Page ${pageNum} of ${totalPages} • Buy PDF at AariWorkDesigns.com`,
    20,
    height - bannerHeight / 2
  );
}
