#!/usr/bin/env node
/**
 * Redimensiona e recomprime as fotos em `public/imagens/` — hoje JPEGs
 * originais de celular (até 4032×3024, ~4,26 MB no total) servidos para
 * slots de ~140–380px na página. Antes de sobrescrever, guarda uma cópia em
 * alta em `originais/imagens/` (fora de `public/`, nunca servida pelo
 * Next) — o repositório é a única cópia dessas fotos.
 *
 * Uso: node scripts/optimize-images.mjs
 */
import { mkdir, copyFile, readdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const IMAGES_DIR = path.join(ROOT, "public", "imagens");
const BACKUP_DIR = path.join(ROOT, "originais", "imagens");

const MAX_DIMENSION = 1600;
const JPEG_QUALITY = 82;

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(0)} KB`;
}

async function main() {
  await mkdir(BACKUP_DIR, { recursive: true });

  const files = (await readdir(IMAGES_DIR)).filter((name) =>
    /\.(jpe?g)$/i.test(name),
  );

  let totalBefore = 0;
  let totalAfter = 0;

  for (const name of files) {
    const filePath = path.join(IMAGES_DIR, name);
    const backupPath = path.join(BACKUP_DIR, name);
    const before = (await stat(filePath)).size;

    // Preserva o original em alta na primeira vez que o script roda para
    // este arquivo — não sobrescreve um backup já existente.
    if (!existsSync(backupPath)) {
      await copyFile(filePath, backupPath);
    }

    // Lê sempre do backup em alta (nunca do arquivo já otimizado), para o
    // script ser seguro de rodar mais de uma vez sem perder qualidade a
    // cada passada.
    await sharp(backupPath)
      .rotate() // aplica a orientação EXIF antes de medir/redimensionar
      .resize({
        width: MAX_DIMENSION,
        height: MAX_DIMENSION,
        fit: "inside",
        withoutEnlargement: true,
      })
      .jpeg({ quality: JPEG_QUALITY, mozjpeg: true })
      .toFile(filePath);

    const after = (await stat(filePath)).size;
    totalBefore += before;
    totalAfter += after;

    const reduction = (100 * (1 - after / before)).toFixed(0);
    console.log(
      `${name.padEnd(14)} ${formatKb(before).padStart(9)} → ${formatKb(after).padStart(9)}  (-${reduction}%)`,
    );
  }

  console.log("");
  console.log(
    `Total: ${formatKb(totalBefore)} → ${formatKb(totalAfter)}  (-${(100 * (1 - totalAfter / totalBefore)).toFixed(0)}%)`,
  );
  console.log(`Originais preservados em: ${path.relative(ROOT, BACKUP_DIR)}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
