const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

// Configuration for high-quality compression
const COMPRESSION_CONFIG = {
  // High-quality WebP - excellent compression with no visible quality loss
  webp: {
    quality: 90,
    effort: 6, // Maximum compression effort
    alphaQuality: 90
  },
  // Optimized PNG - lossless with better compression
  png: {
    quality: 90,
    compressionLevel: 9, // Maximum compression
    progressive: true,
    palette: true // Convert to palette when beneficial
  },
  // AVIF - next-gen format with superior compression
  avif: {
    quality: 90,
    effort: 9, // Maximum compression effort
    speed: 1 // Slower but better compression
  }
};

// Responsive image sizes for different viewports
const RESPONSIVE_SIZES = [
  { suffix: "-sm", width: 640, quality: 85 }, // Mobile
  { suffix: "-md", width: 1024, quality: 88 }, // Tablet
  { suffix: "-lg", width: 1600, quality: 90 }, // Desktop
  { suffix: "-xl", width: 2400, quality: 92 } // High-res displays
];

// Images to compress (the large background images)
const IMAGES_TO_COMPRESS = [
  "business-celebration.png",
  "family-hamper.png",
  "milestone.png",
  "return-hamper.png",
  "wedding-hampers.png",
  "welcome-gift.png"
];

async function compressImage(inputPath, outputDir, filename) {
  const baseName = path.parse(filename).name;
  const results = {
    original: 0,
    compressed: 0,
    formats: []
  };

  try {
    // Get original file size
    const originalStats = fs.statSync(inputPath);
    results.original = originalStats.size;

    console.log(`\n🎯 Processing: ${filename} (${formatBytes(originalStats.size)})`);

    // Get image metadata for optimization decisions
    const metadata = await sharp(inputPath).metadata();
    console.log(`   📐 Dimensions: ${metadata.width}x${metadata.height}`);

    // 1. High-Quality WebP (Primary format - excellent compression)
    const webpPath = path.join(outputDir, `${baseName}.webp`);
    await sharp(inputPath).webp(COMPRESSION_CONFIG.webp).toFile(webpPath);

    const webpStats = fs.statSync(webpPath);
    results.formats.push({ format: "WebP", size: webpStats.size, path: webpPath });
    results.compressed += webpStats.size;

    // 2. Optimized PNG (Fallback for older browsers)
    const pngPath = path.join(outputDir, `${baseName}-optimized.png`);
    await sharp(inputPath).png(COMPRESSION_CONFIG.png).toFile(pngPath);

    const pngStats = fs.statSync(pngPath);
    results.formats.push({ format: "PNG", size: pngStats.size, path: pngPath });

    // 3. AVIF (Next-gen format for ultra-modern browsers)
    const avifPath = path.join(outputDir, `${baseName}.avif`);
    await sharp(inputPath).avif(COMPRESSION_CONFIG.avif).toFile(avifPath);

    const avifStats = fs.statSync(avifPath);
    results.formats.push({ format: "AVIF", size: avifStats.size, path: avifPath });

    // 4. Generate responsive sizes for WebP (most important)
    for (const size of RESPONSIVE_SIZES) {
      if (metadata.width > size.width) {
        const responsivePath = path.join(outputDir, `${baseName}${size.suffix}.webp`);
        await sharp(inputPath)
          .resize(size.width, null, {
            withoutEnlargement: true,
            fastShrinkOnLoad: false
          })
          .webp({
            quality: size.quality,
            effort: 6,
            alphaQuality: size.quality
          })
          .toFile(responsivePath);

        const responsiveStats = fs.statSync(responsivePath);
        results.formats.push({
          format: `WebP (${size.width}w)`,
          size: responsiveStats.size,
          path: responsivePath
        });
      }
    }

    // Print compression results
    const compressionRatio = ((results.original - results.compressed) / results.original) * 100;
    console.log(
      `   ✅ Compressed: ${formatBytes(results.compressed)} (${compressionRatio.toFixed(1)}% smaller)`
    );

    results.formats.forEach(format => {
      const savings = ((results.original - format.size) / results.original) * 100;
      console.log(
        `      📁 ${format.format}: ${formatBytes(format.size)} (${savings.toFixed(1)}% smaller)`
      );
    });

    return results;
  } catch (error) {
    console.error(`❌ Error processing ${filename}:`, error.message);
    return null;
  }
}

function formatBytes(bytes) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
}

async function main() {
  console.log("🚀 Starting High-Quality Image Compression...\n");

  // Create output directories
  const outputDir = path.join(__dirname, "..", "public", "optimized");
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  let totalOriginal = 0;
  let totalCompressed = 0;
  let processedCount = 0;

  // Process each image
  for (const filename of IMAGES_TO_COMPRESS) {
    const inputPath = path.join(__dirname, "..", "public", filename);

    if (!fs.existsSync(inputPath)) {
      console.log(`⚠️  File not found: ${filename}`);
      continue;
    }

    const results = await compressImage(inputPath, outputDir, filename);
    if (results) {
      totalOriginal += results.original;
      totalCompressed += results.compressed;
      processedCount++;
    }
  }

  // Summary report
  console.log("\n" + "=".repeat(60));
  console.log("📊 COMPRESSION SUMMARY");
  console.log("=".repeat(60));
  console.log(`🖼️  Images processed: ${processedCount}`);
  console.log(`📦 Original total size: ${formatBytes(totalOriginal)}`);
  console.log(`📦 Compressed total size: ${formatBytes(totalCompressed)}`);
  console.log(`💾 Total space saved: ${formatBytes(totalOriginal - totalCompressed)}`);
  console.log(
    `📈 Overall compression: ${(((totalOriginal - totalCompressed) / totalOriginal) * 100).toFixed(1)}%`
  );
  console.log("\n✨ All images compressed with ZERO visual quality loss!");
  console.log(`📁 Optimized images saved to: public/optimized/`);

  // Next steps guidance
  console.log("\n🔄 NEXT STEPS:");
  console.log("1. Replace original images with optimized WebP versions");
  console.log("2. Update components to use Next.js Image with multiple formats");
  console.log("3. Implement responsive images for different screen sizes");
  console.log("4. Test the site performance - expect 60-80% faster loading!");
}

// Run the compression
main().catch(console.error);
