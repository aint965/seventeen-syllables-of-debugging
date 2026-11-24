import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "Breakpoint holds its breath",
  "The cursor blinks past midnight",
  "It was always me",
].join("\n") + "\n";

// Runtime self-check: validate the composed text against the competition
// gate (exactly 3 non-empty lines, 1–200 characters total) before writing
// anything, so a broken haiku can never reach /output/entry.txt.
function validateEntry(text: string): void {
  const lines = text.split("\n").filter((line) => line.trim().length > 0);
  if (lines.length !== 3) {
    throw new Error(
      `Entry failed self-check: expected exactly 3 non-empty lines, got ${lines.length}.`,
    );
  }
  if (text.length < 1 || text.length > 200) {
    throw new Error(
      `Entry failed self-check: expected 1–200 characters, got ${text.length}.`,
    );
  }
}

validateEntry(HAIKU);

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), HAIKU, "utf8");
