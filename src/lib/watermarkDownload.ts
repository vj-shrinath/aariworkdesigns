/**
 * Downloads an image with an auto-applied watermark.
 * Uses Canvas API to draw the image and overlay the site URL watermark.
 */
export async function watermarkDownload(imgUrl: string, filename: string): Promise<void> {
  // Fetch image as blob, then draw on canvas with watermark
  const response = await fetch(imgUrl, { mode: 'cors' });
  const blob = await response.blob();

  // Draw on canvas
  const img = await createImageBitmap(blob);
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;

  const ctx = canvas.getContext('2d')!;

  // Draw original image
  ctx.drawImage(img, 0, 0);

  // ── Watermark configuration ──
  const watermarkText = 'aariworkdesigns.com';
  const fontSize = Math.max(18, Math.round(img.width * 0.035));
  const padding = Math.round(fontSize * 1.1);

  ctx.save();

  // Semi-transparent background pill behind text
  ctx.font = `bold ${fontSize}px Inter, sans-serif`;
  ctx.textBaseline = 'bottom';
  const textWidth = ctx.measureText(watermarkText).width;
  const pillPadX = padding * 0.6;
  const pillPadY = padding * 0.35;
  const pillX = img.width - textWidth - pillPadX * 2 - padding;
  const pillY = img.height - fontSize - pillPadY * 2 - padding;
  const pillW = textWidth + pillPadX * 2;
  const pillH = fontSize + pillPadY * 2;
  const pillR = pillH / 2;

  ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
  // Rounded rectangle
  ctx.beginPath();
  ctx.moveTo(pillX + pillR, pillY);
  ctx.lineTo(pillX + pillW - pillR, pillY);
  ctx.quadraticCurveTo(pillX + pillW, pillY, pillX + pillW, pillY + pillR);
  ctx.lineTo(pillX + pillW, pillY + pillH - pillR);
  ctx.quadraticCurveTo(pillX + pillW, pillY + pillH, pillX + pillW - pillR, pillY + pillH);
  ctx.lineTo(pillX + pillR, pillY + pillH);
  ctx.quadraticCurveTo(pillX, pillY + pillH, pillX, pillY + pillH - pillR);
  ctx.lineTo(pillX, pillY + pillR);
  ctx.quadraticCurveTo(pillX, pillY, pillX + pillR, pillY);
  ctx.closePath();
  ctx.fill();

  // Watermark text
  ctx.fillStyle = 'rgba(255, 215, 0, 0.92)'; // gold to match brand accent
  ctx.shadowColor = 'rgba(0,0,0,0.6)';
  ctx.shadowBlur = 4;
  ctx.fillText(watermarkText, pillX + pillPadX, pillY + pillH - pillPadY);

  ctx.restore();

  // Export watermarked canvas as blob and trigger download
  canvas.toBlob((watermarkedBlob) => {
    if (!watermarkedBlob) return;
    const url = URL.createObjectURL(watermarkedBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }, 'image/jpeg', 0.92);
}
