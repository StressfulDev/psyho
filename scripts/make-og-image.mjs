import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const input = path.join(root, "src/assets/img/hero.webp");
const output = path.join(root, "public/og-image.jpg");

const meta = await sharp(input).metadata();
console.log("source:", meta.width, "x", meta.height);

const info = await sharp(input)
  .resize(1200, 630, { fit: "cover", position: "top" })
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(output);

console.log("og-image:", info.width, "x", info.height, info.size, "bytes");
