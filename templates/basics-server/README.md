# Gracile Starter Project: Basics (server)

```sh
npm create gracile@latest -t basics-server
```

---

<div align="center">

[🕹️ Try it online](https://gracile-template-basic-blog-static.netlify.app/)

</div>

---

> 🧚 **Already a Gracile pro?** Delete this file. Have fun!

Features:

- ✅ Minimal styling (make it your own!)
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Sitemap support
- ✅ Markdown support
- ✅ SVG support
- ✅ Server-rendered Lit Elements

## 🏗️ Project Structure

```text
├─ ⬛️ README.md
├─ 🟠 package.json
├─ 📂 public/
│   └─ 🔶 favicon.svg
├─ 🟨 server.js
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
├─ 🟠 tsconfig.json
└─ 🟦 vite.config.ts
```

## 🪄 Commands

All commands are run from the root of the project, from a terminal:

| Command              | Action                                       |
| :------------------- | :------------------------------------------- |
| `npm install`        | Installs dependencies                        |
| `node --run dev`     | Starts local dev server at `localhost:4567`  |
| `node --run check`   | Type-check your project sources              |
| `node --run build`   | Build your production site to `./dist/`      |
| `node --run preview` | Preview your build locally, before deploying |

## 🧠 Want to learn more?

Check out the [Gracile documentation](https://gracile.js.org) or jump into the [Discord server](https://gracile.js.org/chat/).
