const fs = require('fs');
const path = require('path');
const https = require('https');

const downloadImage = (url, outputPath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        console.log(`Downloaded: ${outputPath}`);
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(outputPath, () => reject(err));
      });
    }).on('error', reject);
  });
};

const services = [
  { name: 'driveways', width: 800, height: 600 },
  { name: 'foundations', width: 800, height: 600 },
  { name: 'decorative', width: 800, height: 600 },
  { name: 'commercial', width: 800, height: 600 },
  { name: 'repair', width: 800, height: 600 },
  { name: 'patios', width: 800, height: 600 }
];

const projects = [
  { name: 'office', width: 1200, height: 675 },
  { name: 'residential', width: 1200, height: 675 },
  { name: 'retail', width: 1200, height: 675 },
  { name: 'industrial', width: 1200, height: 675 }
];

async function generateImages() {
  try {
    // Generate service images
    for (const service of services) {
      const outputPath = path.join(__dirname, '..', 'public', 'images', 'services', `${service.name}.jpg`);
      await downloadImage(
        `https://picsum.photos/${service.width}/${service.height}`,
        outputPath
      );
    }

    // Generate project images
    for (const project of projects) {
      const outputPath = path.join(__dirname, '..', 'public', 'images', 'projects', `${project.name}.jpg`);
      await downloadImage(
        `https://picsum.photos/${project.width}/${project.height}`,
        outputPath
      );
    }

    // Generate hero and about images
    const heroPath = path.join(__dirname, '..', 'public', 'images', 'hero.jpg');
    await downloadImage('https://picsum.photos/1920/1080', heroPath);

    const aboutPath = path.join(__dirname, '..', 'public', 'images', 'about.jpg');
    await downloadImage('https://picsum.photos/800/800', aboutPath);

    console.log('All images generated successfully!');
  } catch (error) {
    console.error('Error generating images:', error);
    process.exit(1);
  }
}

generateImages();
