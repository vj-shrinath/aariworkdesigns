import { PDFDocument, rgb, degrees, StandardFonts } from 'pdf-lib';

export interface WatermarkOptions {
  watermarkText?: string;
  subText?: string;
  opacity?: number;
  rotationDegrees?: number;
  fontSize?: number;
}

/**
 * Takes an un-watermarked PDF ArrayBuffer / Buffer and returns a watermarked PDF Uint8Array buffer.
 * Automatically injects diagonal watermark grid across every page + bottom footer branding bar.
 */
export async function injectWatermarkToPdf(
  inputPdfBuffer: Buffer | ArrayBuffer | Uint8Array,
  options: WatermarkOptions = {}
): Promise<Uint8Array> {
  const {
    watermarkText = 'aariworkdesigns.com',
    subText = 'SAMPLE PREVIEW • VIP ACCESS ONLY',
    opacity = 0.22,
    rotationDegrees = -35,
  } = options;

  // Load PDF Document
  const pdfDoc = await PDFDocument.load(inputPdfBuffer);
  const pages = pdfDoc.getPages();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  for (const page of pages) {
    const { width, height } = page.getSize();

    // 1. Draw Diagonal Repeating Watermark Grid
    const fontSize = Math.max(16, Math.min(32, Math.round(width * 0.045)));
    const textWidth = fontBold.widthOfTextAtSize(watermarkText, fontSize);
    const subWidth = fontRegular.widthOfTextAtSize(subText, fontSize * 0.6);

    const stepX = textWidth * 1.8;
    const stepY = fontSize * 5;

    // Cover page area with grid of diagonal watermarks
    for (let x = -width * 0.5; x < width * 1.5; x += stepX) {
      for (let y = -height * 0.5; y < height * 1.5; y += stepY) {
        page.drawText(watermarkText, {
          x,
          y,
          size: fontSize,
          font: fontBold,
          color: rgb(0.83, 0.68, 0.21), // Gold accent #D4AF37
          opacity: opacity,
          rotate: degrees(rotationDegrees),
        });

        page.drawText(subText, {
          x: x + 10,
          y: y - (fontSize * 0.8),
          size: fontSize * 0.55,
          font: fontRegular,
          color: rgb(0.4, 0.4, 0.4),
          opacity: opacity * 1.2,
          rotate: degrees(rotationDegrees),
        });
      }
    }

    // 2. Draw Solid Bottom Footer Bar on Every Page
    const footerHeight = 28;
    // Semi-transparent background banner
    page.drawRectangle({
      x: 0,
      y: 0,
      width: width,
      height: footerHeight,
      color: rgb(0.08, 0.08, 0.12),
      opacity: 0.85,
    });

    const bannerText = `PREVIEW WATERMARK • BUY OR SUBSCRIBE AT AARIWORKDESIGNS.COM FOR CLEAN FULL RES PDF`;
    const bannerTextWidth = fontBold.widthOfTextAtSize(bannerText, 9);
    const bannerX = Math.max(10, (width - bannerTextWidth) / 2);

    page.drawText(bannerText, {
      x: bannerX,
      y: 8,
      size: 9,
      font: fontBold,
      color: rgb(1, 0.84, 0.2), // Bright Gold
      opacity: 0.95,
    });
  }

  // Serialize PDF
  return await pdfDoc.save();
}

/**
 * Extract total page count from PDF buffer
 */
export async function getPdfPageCount(inputPdfBuffer: Buffer | ArrayBuffer | Uint8Array): Promise<number> {
  try {
    const pdfDoc = await PDFDocument.load(inputPdfBuffer, { ignoreEncryption: true });
    return pdfDoc.getPageCount();
  } catch (err) {
    console.error('Error counting PDF pages:', err);
    return 1;
  }
}
