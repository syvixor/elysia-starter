# Elysia Starter

A minimal starter project built with [Elysia](https://elysiajs.com), the ergonomic Bun/Node web framework, running on the **Node Adapter** with auto-generated **OpenAPI** documentation served via **Scalar**.

## Features

- **Elysia** — fast, type-safe HTTP server
- **Node Adapter** (`@elysiajs/node`) — runs on Node.js instead of Bun
- **OpenAPI + Scalar** (`@elysia/openapi`) — auto-generated interactive API docs at `/openapi`
- **Zero-config TypeScript** — `tsx` for development, `tsc` for production builds

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- [pnpm](https://pnpm.io)

### Installation

```bash
pnpm install
```

### Development

Start the dev server with hot reload:

```bash
pnpm dev
```

The server runs at `http://localhost:3000`.

## Scripts

| Command          | Description                              |
| ---------------- | ---------------------------------------- |
| `pnpm dev`       | Run with `tsx watch` (hot reload)        |
| `pnpm build`     | Compile TypeScript to `dist/` via `tsc`  |
| `pnpm start`     | Run the compiled production build        |

## Endpoints

| Method | Path       | Description                     |
| ------ | ---------- | ------------------------------- |
| GET    | `/`        | Health check (`200 OK`)         |
| GET    | `/openapi` | Interactive API documentation   |

## Project Structure

```
elysia-starter/
├── src/
│   └── index.ts   # Server entrypoint
├── .gitignore
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── README.md
```