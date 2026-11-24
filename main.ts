import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const HAIKU = [
  "Breakpoint holds its breath",
  "The cursor blinks past midnight",
  "It was always me",
].join("\n") + "\n";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), HAIKU, "utf8");
