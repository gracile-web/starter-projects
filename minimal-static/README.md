# Gracile Starter Project: Minimal setup (static)

```sh
npm create gracile@latest -t minimal-static
```

> 🧚 **Already a Gracile pro?** Delete this file. Have fun!

## 🏗️ Project Structure

```text
├─ ⬛️ README.md
├─ 🟦 gracile.config.ts
├─ 🟠 package.json
├─ 📂 public/
│   └─ 🔶 favicon.svg
├─ 📂 src/
│   ├─ 🟦 ambient.d.ts
│   ├─ 🟦 document.client.ts
│   ├─ 🔷 document.css
│   ├─ 🟦 document.ts
│   └─ 📂 routes/
│       ├─ 🟦 (home).client.ts
│       ├─ 🔷 (home).css
│       └─ 🟦 (home).ts
└─ 🟠 tsconfig.json
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
