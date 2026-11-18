// news-image-20261118 entry v2: emit the finished front page.
//
// The image is built ahead of time (flat vector art drawn in code, 35 stories
// verified from live sources for Wednesday 18 November 2026). This program
// only gates it and copies it to the output directory. Node standard library
// only; no network, no dependencies, deterministic output.
import { createHash } from "node:crypto";
import { copyFileSync, mkdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const MAX_BYTES = 1048576;
const SIDE = 1024;

function fail(message) {
  console.error(`entry: ${message}`);
  process.exit(1);
}

// Read the IHDR chunk of a PNG and return [width, height].
function pngDimensions(bytes) {
  if (bytes.length < 33 || !bytes.subarray(0, 8).equals(PNG_MAGIC)) {
    fail("entry.png is not a PNG file");
  }
  if (bytes.toString("ascii", 12, 16) !== "IHDR") {
    fail("entry.png has no IHDR chunk");
  }
  return [bytes.readUInt32BE(16), bytes.readUInt32BE(20)];
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function main() {
  const here = dirname(fileURLToPath(import.meta.url));
  const sourcePath = join(here, "entry.png");

  const source = readFileSync(sourcePath);
  if (source.length > MAX_BYTES) {
    fail(`entry.png is ${source.length} bytes, over the 1 MiB limit`);
  }
  const [width, height] = pngDimensions(source);
  if (width !== SIDE || height !== SIDE) {
    fail(`entry.png is ${width}x${height}, expected ${SIDE}x${SIDE}`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const targetPath = join(outDir, "entry.png");
  copyFileSync(sourcePath, targetPath);

  // Verify the copy byte for byte: same size, same hash.
  const copied = readFileSync(targetPath);
  if (copied.length !== source.length || sha256(copied) !== sha256(source)) {
    fail("output copy does not match entry.png");
  }
  console.log(
    `entry.png -> ${targetPath} (${statSync(targetPath).size} bytes, ` +
      `${width}x${height}, sha256 ${sha256(copied).slice(0, 12)}...)`,
  );
}

main();
