export const siteConfig = {
  name: "Mori Docs",
  productName: "Mori",
  description:
    "Documentation for Mori, the cross-platform Growtopia companion with bot management, item data, world state, and WebSocket events.",
  githubUrl: "https://github.com/CLOEI/Mori",
  docsUrl: "/docs",
  docsSourceUrl: "https://github.com/CLOEI/Mori/blob/main/DOCS.md",
  rawDocsUrl: "https://raw.githubusercontent.com/CLOEI/Mori/main/DOCS.md",
  baseUrl: "http://localhost:3000",
  websocketUrl: "ws://localhost:3000/ws",
} as const

export const landingMetrics = [
  { label: "HTTP endpoints", value: "7+" },
  { label: "WebSocket events", value: "13+" },
  { label: "Auth", value: "none" },
] as const

export const endpointHighlights = [
  "GET /bots",
  "POST /bots",
  "GET /bots/{id}/state",
  "POST /bots/{id}/cmd",
  "GET /items",
  "GET /items/names",
] as const

export const eventHighlights = [
  "BotAdded",
  "BotStatus",
  "WorldLoaded",
  "TileUpdate",
  "InventoryUpdate",
  "Console",
] as const

export const productHighlights = [
  {
    title: "Simple bot control",
    description:
      "Spawn bots, inspect state, move them around, and send commands from one clean API surface.",
  },
  {
    title: "Live world data",
    description:
      "Read tiles, players, dropped objects, inventory, and item data without digging through internal formats.",
  },
  {
    title: "WebSocket events",
    description:
      "Subscribe to status, movement, inventory, and console updates through a small event envelope.",
  },
  {
    title: "Upstream-friendly docs",
    description:
      "The reference page is synced from Mori's upstream `DOCS.md`, so this site stays easy to refresh.",
  },
] as const
