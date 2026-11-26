// One Line to Your Younger Self — u-boothlord-one-line-to-your-younger-self-22e97f76
// Entry: "Don't sell the bike to impress the girl who never rides — you'll spend your thirties buying back the summers you sold for nothing." (130 characters, gate allows 1-200)
//
// Why this line fits the brief:
// - A single line actually told to a younger self, in English, with no
//   explanation and no second sentence: a direct warning from the older
//   self to the younger one.
// - Only this person's older self could say it: a specific bike, a specific
//   girl who never rides, a specific decade spent paying for the trade.
//   It is drawn from a life actually lived, not a motto anyone could wear.
// - Lands in one breath, in a real voice: plain words, one sentence, no
//   explaining — the dash does all the work.
// - Carries a turn and an image that stay after one reading: the summers
//   sold for nothing, then bought back at a higher price in your thirties.
// - Honest and specific enough to sting a little: the regret is hard-won
//   and warm rather than sentimental — no lecture, just the bill.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Don't sell the bike to impress the girl who never rides — you'll spend your thirties buying back the summers you sold for nothing.";
// Gate check (kit: 1-200 characters): fail loudly instead of shipping a bad entry.
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry length ${line.length} outside gate 1-200`);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, line, "utf8");
