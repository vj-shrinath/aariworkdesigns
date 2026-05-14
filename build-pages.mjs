import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

console.log('Building for OpenNext...');
execSync('npx opennextjs-cloudflare build --dangerouslyUseUnsupportedNextVersion', { stdio: 'inherit' });

console.log('Preparing output for Cloudflare Pages...');
const outputDir = '.pages-output';

// Create output directory
if (fs.existsSync(outputDir)) {
  fs.rmSync(outputDir, { recursive: true, force: true });
}
fs.mkdirSync(outputDir);

// Copy assets
const assetsDir = path.join('.open-next', 'assets');
if (fs.existsSync(assetsDir)) {
  fs.cpSync(assetsDir, outputDir, { recursive: true });
}

// Move worker.js to _worker.js
const workerFile = path.join('.open-next', 'worker.js');
if (fs.existsSync(workerFile)) {
  fs.copyFileSync(workerFile, path.join(outputDir, '_worker.js'));
}

console.log('Build complete! Ready for Cloudflare Pages.');
