import { PDFDocument, rgb, degrees, StandardFonts } from 'pdf-lib';

export type WatermarkLevel = 'sample_preview' | 'individual_purchase' | 'premium_subscription';

export interface WatermarkOptions {
  level?: WatermarkLevel;
  customerIdentifier?: string; // e.g. "vi***@gmail.com" or "user@domain.com"
  orderId?: string;           // e.g. "AWD-123456" or txnid
  customText?: string;
  opacity?: number;
}

/**
 * Mask sensitive email for privacy in watermarks if desired
 * e.g., "vjshrinath@gmail.com" -> "vj***@gmail.com"
 */
export function maskCustomerIdentifier(identifier: string): string {
  if (!identifier) return 'Valued Customer';
  if (identifier.includes('@')) {
    const [user, domain] = identifier.split('@');
    if (user.length <= 2) {
      return `${user}***@${domain}`;
    }
    return `${user.substring(0, 2)}***${user.substring(user.length - 1)}@${domain}`;
  }
  if (identifier.length > 8) {
    return `${identifier.substring(0, 4)}...${identifier.substring(identifier.length - 4)}`;
  }
  return identifier;
}

/**
 * Takes a clean master PDF buffer and returns an on-demand watermarked PDF Uint8Array buffer.
 * DOES NOT modify or store permanent copies in storage.
 */
export async function injectWatermarkToPdf(
  inputPdfBuffer: Buffer | ArrayBuffer | Uint8Array,
  options: WatermarkOptions = {}
): Promise<Uint8Array> {
  const {
    level = 'sample_preview',
    customerIdentifier = '',
    orderId = '',
    customText = '',
    opacity,
  } = options;

  // Load PDF Document
  const pdfDoc = await PDFDocument.load(inputPdfBuffer, { ignoreEncryption: true });
  const pages = pdfDoc.getPages();
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const maskedUser = customerIdentifier ? maskCustomerIdentifier(customerIdentifier) : '';

  for (const page of pages) {
    const { width, height } = page.getSize();

    if (level === 'sample_preview') {
      // LEVEL A: Website Preview / Non-Purchased Sample Watermark
      // Diagonal repeating grid + prominent footer banner
      const sampleText = customText || 'AariWorkDesigns.com';
      const subText = 'SAMPLE PREVIEW • BUY OR SUBSCRIBE FOR UNLIMITED CLEAN PDF';
      const gridOpacity = opacity ?? 0.18;

      const fontSize = Math.max(16, Math.min(30, Math.round(width * 0.045)));
      const textWidth = fontBold.widthOfTextAtSize(sampleText, fontSize);
      const stepX = textWidth * 1.8;
      const stepY = fontSize * 5;

      // Draw diagonal repeating grid
      for (let x = -width * 0.5; x < width * 1.5; x += stepX) {
        for (let y = -height * 0.5; y < height * 1.5; y += stepY) {
          page.drawText(sampleText, {
            x,
            y,
            size: fontSize,
            font: fontBold,
            color: rgb(0.83, 0.68, 0.21), // Gold accent #D4AF37
            opacity: gridOpacity,
            rotate: degrees(-35),
          });

          page.drawText(subText, {
            x: x + 10,
            y: y - (fontSize * 0.75),
            size: fontSize * 0.5,
            font: fontRegular,
            color: rgb(0.3, 0.3, 0.3),
            opacity: gridOpacity * 1.1,
            rotate: degrees(-35),
          });
        }
      }

      // Solid Bottom Preview Banner
      const footerHeight = 26;
      page.drawRectangle({
        x: 0,
        y: 0,
        width: width,
        height: footerHeight,
        color: rgb(0.08, 0.08, 0.12),
        opacity: 0.9,
      });

      const bannerMsg = `PREVIEW WATERMARK • PURCHASE AT AARIWORKDESIGNS.COM FOR FULL CLEAN RES TRACING PDF`;
      const bannerMsgWidth = fontBold.widthOfTextAtSize(bannerMsg, 8.5);
      const bannerX = Math.max(10, (width - bannerMsgWidth) / 2);

      page.drawText(bannerMsg, {
        x: bannerX,
        y: 8,
        size: 8.5,
        font: fontBold,
        color: rgb(1, 0.84, 0.2), // Bright Gold
        opacity: 0.95,
      });

    } else if (level === 'individual_purchase') {
      // LEVEL B: Purchased Single PDF
      // Subtle non-intrusive footer line ONLY. NEVER block central tracing motifs/embroidery lines!
      const footerHeight = 22;

      // Subtle translucent footer background bar
      page.drawRectangle({
        x: 0,
        y: 0,
        width: width,
        height: footerHeight,
        color: rgb(0.96, 0.96, 0.98),
        opacity: 0.95,
      });

      // Top accent hairline border above footer
      page.drawLine({
        start: { x: 0, y: footerHeight },
        end: { x: width, y: footerHeight },
        thickness: 0.75,
        color: rgb(0.83, 0.68, 0.21),
        opacity: 0.6,
      });

      const brandLabel = '© AariWorkDesigns.com';
      const licenseDetails = `Licensed to: ${maskedUser}` + (orderId ? ` • Order: ${orderId}` : '');
      const footerFontSize = Math.max(7.5, Math.min(9.5, width * 0.015));

      // Left-aligned brand text
      page.drawText(brandLabel, {
        x: 14,
        y: 7,
        size: footerFontSize,
        font: fontBold,
        color: rgb(0.12, 0.12, 0.18),
        opacity: 0.85,
      });

      // Right-aligned customer license detail
      const detailsWidth = fontRegular.widthOfTextAtSize(licenseDetails, footerFontSize);
      const rightX = Math.max(width - detailsWidth - 14, width * 0.4);

      page.drawText(licenseDetails, {
        x: rightX,
        y: 7,
        size: footerFontSize,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.35),
        opacity: 0.85,
      });

    } else if (level === 'premium_subscription') {
      // LEVEL C: VIP Premium Subscription PDF
      // Subtle non-intrusive footer line with VIP badge
      const footerHeight = 22;

      page.drawRectangle({
        x: 0,
        y: 0,
        width: width,
        height: footerHeight,
        color: rgb(0.96, 0.96, 0.98),
        opacity: 0.95,
      });

      page.drawLine({
        start: { x: 0, y: footerHeight },
        end: { x: width, y: footerHeight },
        thickness: 0.75,
        color: rgb(0.83, 0.68, 0.21),
        opacity: 0.6,
      });

      const brandLabel = '© AariWorkDesigns.com • VIP Premium License';
      const licenseDetails = maskedUser ? `Licensed to: ${maskedUser}` : 'Active VIP Member Access';
      const footerFontSize = Math.max(7.5, Math.min(9.5, width * 0.015));

      page.drawText(brandLabel, {
        x: 14,
        y: 7,
        size: footerFontSize,
        font: fontBold,
        color: rgb(0.52, 0.38, 0.05), // Dark Gold
        opacity: 0.9,
      });

      const detailsWidth = fontRegular.widthOfTextAtSize(licenseDetails, footerFontSize);
      const rightX = Math.max(width - detailsWidth - 14, width * 0.4);

      page.drawText(licenseDetails, {
        x: rightX,
        y: 7,
        size: footerFontSize,
        font: fontRegular,
        color: rgb(0.25, 0.25, 0.35),
        opacity: 0.85,
      });
    }
  }

  // Save and return watermarked PDF bytes in memory
  return await pdfDoc.save();
}

/**
 * Extract total page count from PDF buffer safely
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
