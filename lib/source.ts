import { createElement } from "react"
import { loader } from "fumadocs-core/source"
import { BookOpenText, FileCode2 } from "lucide-react"

import { docs } from "collections/server"

export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  icon(icon) {
    switch (icon) {
      case "book-open-text":
        return createElement(BookOpenText, { className: "size-4" })
      case "file-code-2":
        return createElement(FileCode2, { className: "size-4" })
      default:
        return undefined
    }
  },
})
