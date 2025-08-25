// scripts/tw-single-use.mjs
import { readFile } from "node:fs/promises"
import fastGlob from "fast-glob"

const files = await fastGlob(["**/*.{js,jsx,ts,tsx,mdx}", "!**/node_modules/**", "!**/.next/**"], { gitignore: true })

const counts = new Map()

const CLASS_RE = /class(?:Name)?\s*=\s*{?["'`]|clsx\(([^)]*)/g
const TOKEN_RE = /[A-Za-z0-9-:[\]/.%]+/g // tailwind utility chars

for (const file of files) {
  let text = await readFile(file, "utf8")

  let match
  while ((match = CLASS_RE.exec(text))) {
    // Pull the attribute or function body
    const start = match.index + match[0].length
    // crude find the matching quote/bracket/backtick
    const quote = text[start - 1]
    const end = quote === "(" ? text.indexOf(")", start) : text.indexOf(quote, start)
    const chunk = text.slice(start, end)

    // tokenise & count
    const tokens = chunk.match(TOKEN_RE) || []
    tokens.forEach((cls) => counts.set(cls, (counts.get(cls) ?? 0) + 1))
  }
}

const singles = [...counts].filter(([, n]) => n === 1).map(([c]) => c)
console.log(`One-off classes (${singles.length}):\n${singles.join(" ")}`)
