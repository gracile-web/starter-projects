# Gracile Starter Project: Basic Blog (static)

```sh
npm create gracile@latest -t basic-blog-static
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
│   │   ├─ ⬛️ about.md
│   │   ├─ 📂 blog/
│   │   │   ├─ ⬛️ bouillabaisse-ftw.md
│   │   │   ├─ ⬛️ i-love-js.md
│   │   │   ├─ ⬛️ linux-is-rad.md
│   │   │   ├─ ⬛️ pointlessness.md
│   │   │   └─ ⬛️ rust-is-cool.md
│   │   ├─ 🟦 content.ts
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
│   │   ├─ 🟦 about.ts
│   │   └─ 📂 blog/
│   │       ├─ 🟪 (blog).scss
│   │       ├─ 🟦 (blog).ts
│   │       ├─ 🟪 [slug].scss
│   │       └─ 🟦 [slug].ts
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
