const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// Hero background
sharp({
  create: {
    width: 1920,
    height: 1080,
    channels: 4,
    background: { r: 0, g: 0, b: 0, alpha: 1 }
  }
})
.linear(0.8) // darken
.toFile(path.join(publicDir, 'hero-bg.jpg'));

// Service images with gradients
const services = [
  { name: 'asphalt', color1: '#1a1a1a', color2: '#4a4a4a' },
  { name: 'concrete', color1: '#2a2a2a', color2: '#5a5a5a' },
  { name: 'striping', color1: '#3a3a3a', color2: '#6a6a6a' }
];

services.forEach(({ name, color1, color2 }) => {
  const width = 800;
  const height = 600;
  const svg = `
    <svg width="${width}" height="${height}">
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad)" />
    </svg>
  `;

  sharp(Buffer.from(svg))
    .toFile(path.join(publicDir, `${name}-service.jpg`));
});
