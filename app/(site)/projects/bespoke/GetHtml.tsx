import fs from "fs"
import path from "path"

export function GetHtml({ fileName }: { fileName: string }) {
  const filePath = path.join(process.cwd(), "public", fileName)
  const html = fs.readFileSync(filePath, "utf8")
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}
