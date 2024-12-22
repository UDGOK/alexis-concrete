const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

async function generateImages() {
  try {
    // Hero background - dark gradient
    await sharp({
      create: {
        width: 1920,
        height: 1080,
        channels: 4,
        background: { r: 20, g: 20, b: 20, alpha: 1 }
      }
    })
    .linear(0.8)
    .jpeg({
      quality: 90,
      chromaSubsampling: '4:4:4'
    })
    .toFile(path.join(publicDir, 'hero-bg.jpg'));

    // Service images with gradients
    const services = [
      { 
        name: 'asphalt',
        width: 800,
        height: 600,
        gradient: {
          type: 'linear',
          stops: [
            { offset: 0, color: '#1a1a1a' },
            { offset: 1, color: '#3a3a3a' }
          ]
        }
      },
      {
        name: 'concrete',
        width: 800,
        height: 600,
        gradient: {
          type: 'linear',
          stops: [
            { offset: 0, color: '#2a2a2a' },
            { offset: 1, color: '#4a4a4a' }
          ]
        }
      },
      {
        name: 'striping',
        width: 800,
        height: 600,
        gradient: {
          type: 'linear',
          stops: [
            { offset: 0, color: '#1a1a1a' },
            { offset: 1, color: '#3a3a3a' }
          ]
        }
      }
    ];

    for (const service of services) {
      const { name, width, height, gradient } = service;
      const svg = `
        <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
              ${gradient.stops.map(stop => 
                `<stop offset="${stop.offset * 100}%" style="stop-color:${stop.color};stop-opacity:1" />`
              ).join('')}
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grad)" />
        </svg>
      `;

      await sharp(Buffer.from(svg))
        .jpeg({
          quality: 90,
          chromaSubsampling: '4:4:4'
        })
        .toFile(path.join(publicDir, `${name}-service.jpg`));
    }

    console.log('Images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
    process.exit(1);
  }
}

generateImages();
