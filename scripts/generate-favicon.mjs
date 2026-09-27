import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';

// Reuse the SVG renderer already supplied by Astro; no extra image dependency.
const requireFromAstro = createRequire(import.meta.resolve('astro'));
const sharp = requireFromAstro('sharp');
const source = new URL('../public/favicon.svg', import.meta.url);
const destination = new URL('../public/favicon.ico', import.meta.url);
const sizes = [16, 32, 48];
const svg = await readFile(source);
const { width } = await sharp(svg).metadata();

// Raster fallbacks use the SVG's default light palette. The SVG itself adapts
// to dark browser chrome. Render each size directly, never downsample a PNG.
const images = await Promise.all(sizes.map(size =>
  sharp(svg, { density: 72 * size / width }).resize(size, size).png().toBuffer()
));

// ICO directory followed by one PNG payload per size (32-bit RGBA).
const directory = Buffer.alloc(6 + 16 * sizes.length);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(sizes.length, 4);
let offset = directory.length;
images.forEach((png, index) => {
  const entry = 6 + 16 * index;
  directory[entry] = sizes[index];
  directory[entry + 1] = sizes[index];
  directory.writeUInt16LE(1, entry + 4);
  directory.writeUInt16LE(32, entry + 6);
  directory.writeUInt32LE(png.length, entry + 8);
  directory.writeUInt32LE(offset, entry + 12);
  offset += png.length;
});
await writeFile(destination, Buffer.concat([directory, ...images]));
console.log('Generated public/favicon.ico from public/favicon.svg (16, 32, 48px).');
