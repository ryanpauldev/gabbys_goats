// filepath: /c:/Personal/code/personal/gabbys_goats/scripts/optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = path.join(__dirname, '../public/images');
const outputDir = path.join(__dirname, '../public/images/optimized');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

async function optimizeImages() {
  const files = fs.readdirSync(inputDir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(inputDir, file);
      const webpOutput = path.join(outputDir, `${path.parse(file).name}.webp`);
      
      await sharp(inputPath)
        .resize({
          width: 900,
          height: 757,
          fit: 'inside',
          withoutEnlargement: true
        }) 
        .webp({ quality: 85 })
        .toFile(webpOutput);
      
      console.log(`Optimized: ${file}`);
    }
  }
}

optimizeImages();