<div align="center">

# Mori Docs

Documentation site for [Mori](https://github.com/CLOEI/Mori), built with Next.js, Bun, and Fumadocs.

</div>

## Overview

This repository contains the docs frontend for Mori, including:

- a simple landing page
- a Fumadocs-powered docs experience
- synced API reference pages generated from Mori's upstream `DOCS.md`

The generated reference lives in `content/docs`, while the app itself lives in `app`, `components`, and `lib`.

## Stack

- `Next.js`
- `Bun`
- `Fumadocs`
- `Tailwind CSS`

## Local Development

Install dependencies:

```bash
bun install
```

Start the dev server:

```bash
bun run dev
```

Open `http://localhost:3000`.

## Available Scripts

Run the development server:

```bash
bun run dev
```

Sync the latest upstream Mori docs:

```bash
bun run docs:sync
```

Regenerate the Fumadocs source:

```bash
bun run docs:build-source
```

Run type checks:

```bash
bun run typecheck
```

Run lint:

```bash
bun run lint
```

Create a production build:

```bash
bun run build
```

## Docs Sync Flow

The API reference is generated from:

- [`CLOEI/Mori/DOCS.md`](https://github.com/CLOEI/Mori/blob/main/DOCS.md)

The sync script:

- fetches the latest upstream `DOCS.md`
- splits it into docs sections
- writes the generated pages into `content/docs/api-reference`

## Contribution

Contributions are welcome.

If you want to contribute:

- keep changes consistent with the existing code style
- use `bun` for development and verification
- run `bun run lint`, `bun run typecheck`, and `bun run build` before opening a pull request
- keep generated docs updates limited to `content/docs` when syncing upstream documentation

## License

This project is licensed under the MIT License. See [LICENSE](./LICENSE).
