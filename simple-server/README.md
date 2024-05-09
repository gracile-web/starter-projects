# Gracile Starter Project: Simple server

> "Server" output mode is still **experimental**!
> It will only work in **development** mode.

```sh
npm create gracile@latest -t simple-server
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
│   ├─ 📂 assets/
│   │   └─ 🔶 gracile-logo.svg
│   ├─ 🟪 common.scss
│   ├─ 🟦 constants.ts
│   ├─ 📂 content/
│   │   ├─ ⬛️ home.md
│   │   └─ 🟦 home.ts
│   ├─ 🟦 document.client.ts
│   ├─ 🟪 document.scss
│   ├─ 🟦 document.ts
│   ├─ 📂 features/
│   │   ├─ 🟦 cool-canvas.ts
│   │   ├─ 📂 counters/
│   │   │   ├─ 🟪 counters.scss
│   │   │   ├─ 🟦 my-lit-counter.ts
│   │   │   └─ 🟦 my-vanilla-counter.ts
│   │   ├─ 🟪 gracile-welcome.scss
│   │   ├─ 🟦 gracile-welcome.ts
│   │   ├─ 📂 shell/
│   │   │   ├─ 🟦 footer.ts
│   │   │   ├─ 🟦 header.ts
│   │   │   ├─ 🟦 menu.ts
│   │   │   └─ 🟪 shell.scss
│   │   └─ 🟦 tree.ts
│   ├─ 📂 routes/
│   │   ├─ 🟦 (home).client.ts
│   │   ├─ 🟪 (home).scss
│   │   ├─ 🟦 (home).ts
│   │   ├─ 📂 form/
│   │   │   ├─ 🟦 regular.client.ts
│   │   │   ├─ 🟦 regular.ts
│   │   │   ├─ 🟦 with-js.client.ts
│   │   │   └─ 🟦 with-js.ts
│   │   ├─ 📂 json/
│   │   │   ├─ 🟦 (json).client.ts
│   │   │   ├─ 🟦 (json).ts
│   │   │   └─ 📂 api/
│   │   │       └─ 📂 simple/
│   │   │           └─ 🟦 [...path].ts
│   │   └─ 📂 markdown-editor/
│   │       ├─ 🟦 (editor).client.ts
│   │       ├─ 🟦 (editor).ts
│   │       └─ 🟦 markdown-api.ts
│   └─ 🟪 tokens.scss
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
