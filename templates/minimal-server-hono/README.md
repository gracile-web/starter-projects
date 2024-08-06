# Gracile Starter Project: Minimal server (hono)

```sh
npm create gracile@latest -t minimal-server-hono
```

> 🧚 **Already a Gracile pro?** Delete this file. Have fun!

## 🏗️ Project Structure

```text
├─ ⬛️ README.md
├─ 🟠 package.json
├─ 📂 public/
│   └─ 🔶 favicon.svg
├─ 🟨 server.js
├─ 📂 src/
│   ├─ 🟦 ambient.d.ts
│   ├─ 🟦 document.client.ts
│   ├─ 🔷 document.css
│   ├─ 🟦 document.ts
│   ├─ 📂 features/
│   │   └─ 🟦 my-greetings.ts
│   └─ 📂 routes/
│       ├─ 🟦 (home).client.ts
│       ├─ 🔷 (home).css
│       ├─ 🟦 (home).ts
│       ├─ 🟦 404.ts
│       ├─ 🟦 about.ts
│       └─ 📂 api/
│           └─ 🟦 [...path].ts
├─ 🟠 tsconfig.json
└─ 🟦 vite.config.ts
```

## 🪄 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4567`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🧠 Want to learn more?

Check out the [Gracile documentation](https://gracile.js.org) or jump into the [Discord server](https://gracile.js.org/chat/).
