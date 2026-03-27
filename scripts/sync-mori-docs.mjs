import { mkdir, writeFile, rm } from "node:fs/promises"
import { join } from "node:path"

const docsUrl = "https://raw.githubusercontent.com/CLOEI/Mori/main/DOCS.md"
const outputDir = "content/docs/api-reference"

async function main() {
  const response = await fetch(docsUrl, {
    headers: {
      "user-agent": "mori-docs-sync",
    },
  })

  if (!response.ok) {
    throw new Error(`failed to fetch docs: ${response.status} ${response.statusText}`)
  }

  const raw = await response.text()
  const body = raw.replace(/^#\s+Mori API & WebSocket Documentation\s*\n+/i, "")

  // Find headings
  const httpIdx = body.indexOf("## HTTP API")
  const wsIdx = body.indexOf("## WebSocket")
  const refIdx = body.indexOf("## Reference")

  const splitPoints = [
    { start: 0, end: httpIdx, id: "overview", title: "Overview", desc: "Base URL and versions" },
    { start: httpIdx, end: wsIdx, id: "http", title: "HTTP API", desc: "REST endpoints for managing Mori setup" },
    { start: wsIdx, end: refIdx, id: "websocket", title: "WebSocket Events", desc: "Live event pushes for tracking game states" },
    { start: refIdx, end: body.length, id: "types", title: "Reference Types", desc: "State values and generic definitions" },
  ]

  // Cleanup old files
  await rm("content/docs/api-reference.mdx", { force: true })
  await rm(outputDir, { recursive: true, force: true })
  await mkdir(outputDir, { recursive: true })

  // Write new files
  for (const part of splitPoints) {
    // some fallback just in case formatting in DOCS.md changes and indexOf() breaks
    if (part.start === -1 || part.end === -1) {
      console.warn(`Could not extract section ${part.id}, check headings!`)
      continue
    }

    const contentSection = body.substring(part.start, part.end)
    const fileName = part.id === "overview" ? "index.mdx" : `${part.id}.mdx`

    const content = `---
title: ${part.title}
description: ${part.desc}
---

${contentSection}`.trimEnd() + "\n"

    await writeFile(join(outputDir, fileName), content, "utf8")
  }

  // Create folder meta.json
  await writeFile(
    join(outputDir, "meta.json"),
    JSON.stringify({
      title: "API Reference",
      icon: "file-code-2",
      pages: ["index", "http", "websocket", "types"]
    }, null, 2),
    "utf8"
  )
}

main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
