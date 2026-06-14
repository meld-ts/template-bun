# @meld-ts/create-bun

<a href="https://github.com/meld-ts/core" target="_blank"><img src="https://github.com/meld-ts/core/raw/main/assets/meld-ts.png" width="320" style="max-width: 100%;"></a>

A modern Bun project scaffold with TypeScript, Biome, and three project modes: **lib**, **app**, and **react-app**.

## Usage

```bash
bun create @meld-ts/bun my-project
```

Or via bunx:

```bash
bunx --package @meld-ts/create-bun create-bun my-project
```

You'll be prompted to choose a project mode:

```
Project mode (lib / app / react-app): [lib]
```

Then follow the printed instructions to install and start:

```bash
cd my-project
bun install
bun run ts-check && bun run test   # lib / app
bun run dev                        # react-app
```

## Project modes

| Mode | Description |
|------|-------------|
| `lib` | TypeScript library — ESM + CJS output via bunup, `isolatedDeclarations` enabled |
| `app` | Node.js app — hot reload dev, bunup build |
| `react-app` | React SPA — Bun native bundler, HMR dev server |

## What's included

- **[Bun](https://bun.sh/)** — runtime, package manager, test runner
- **TypeScript** via [`@typescript/native-preview`](https://github.com/microsoft/typescript-go) (tsgo)
- **[Biome](https://biomejs.dev/)** — formatter + linter, pre-configured
- **[bunup](https://bunup.dev/)** — build tool for lib / app modes
- **Bun native bundler** — for react-app (HTML entrypoint, HMR)

## Available scripts

```bash
bun run fmt           # format with Biome
bun run lint          # lint (warnings as errors)
bun run ts-check      # type check with tsgo
bun run test          # run tests + coverage  (lib / app)
bun run dev           # dev server / hot reload
bun run build         # production build
bun run biome-migrate # sync Biome config after upgrade
```

## Template structure

```
template-lib/               # TypeScript library
├── src/index.ts
├── src/index.test.ts
├── bunup.config.ts
├── tsconfig.json
└── biome.json

template-app/               # Node.js app
├── src/index.ts
├── src/index.test.ts
├── bunup.config.ts
├── tsconfig.json
└── biome.json

template-react-app/         # React SPA
├── src/
│   ├── index.html
│   ├── main.tsx
│   ├── global.css
│   ├── global.d.ts
│   └── app/App.tsx
├── scripts/
│   ├── dev-serve.ts
│   └── build.ts
├── tsconfig.json
└── biome.json
```
