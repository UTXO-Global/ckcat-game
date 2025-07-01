# CKCat Game 🐱

A fun and engaging web-based game featuring an adorable cat character. Built with modern web technologies to provide an entertaining gaming experience.

# CKCAT-GAME – Local WebGL Runtime Guide

## 1. Project Layout

```
CKCAT-GAME/
├─ Build/
│   ├─ ckc1.framework.js.gz
│   ├─ ckc1.data.gz
│   ├─ ckc1.wasm.gz
│   └─ ckc1.loader.js
├─ StreamingAssets/
├─ TemplateData/
├─ index.html
├─ server.js          ←  Express helper (already in repo)
└─ README.md          ←  this file
```

> **Important:** `index.html` contains relative links, so **_always_**\*\* start the server from the project root (**\`\`**)\*\*, **not** from the `Build/` folder.

---

## 2. Prerequisites

| Tool        | Version       | Check     |
| ----------- | ------------- | --------- |
| **Node.js** | ≥ 18          | `node -v` |
| **npm**     | Matching Node | `npm -v`  |

---

## 3. Quick Start — **Run the bundled Express server** ⭐️

1. **Install dependencies (one‑time):**

   ```bash
   npm install
   ```

2. **Launch the server (every run):**

   ```bash
   node server.js
   ```

3. Open [**http://localhost:8080/index.html**](http://localhost:8080/index.html) in your browser.

`server.js` automatically:

- Serves the entire repository as static files.
- Adds `Content-Encoding: gzip` for **any** request ending in `.gz`.
- Sets correct MIME types for `.js`, `.wasm`, `.data` so streaming works.

Your game should now load without errors.

---

## 4. Verify headers (optional but handy)

1. Open **DevTools › Network**.
2. Reload the page.
3. Click `ckc1.framework.js.gz` ▸ **Headers**.

   - Expect `Content-Encoding: gzip`.
   - `Content-Type` must be `application/javascript`.

4. Do the same for `ckc1.wasm.gz` → should be `application/wasm`.

---

## 5. Common Pitfalls

| Symptom                           | Likely Cause                              | Fix                                                      |
| --------------------------------- | ----------------------------------------- | -------------------------------------------------------- |
| **404** on build files            | Started server from `Build/`              | Start server in **project root**.                        |
| Still shows _Unable to parse …gz_ | Header missing                            | Make sure you are running \`\` and not any other server. |
| Slow first load                   | Unity build uses _Decompression Fallback_ | Disable fallback for production; rely on gzip headers.   |

---

## 6. Shipping Beyond Localhost

- Keep **Compression Format = Gzip** (or Brotli) in Unity.
- In production (Nginx, Apache, Cloudflare, etc.) serve pre‑compressed files with proper `Content-Encoding` headers to avoid Unity's JavaScript fallback.

---

Happy testing! 🚀
