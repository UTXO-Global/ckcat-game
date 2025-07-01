const express = require("express");
const path = require("path");
const app = express();

app.use((req, res, next) => {
  if (req.url.endsWith(".gz")) {
    res.set("Content-Encoding", "gzip");

    if (req.url.endsWith(".wasm.gz")) res.type("application/wasm");
    else if (req.url.endsWith(".js.gz")) res.type("application/javascript");
    else if (req.url.endsWith(".data.gz")) res.type("application/octet-stream");
  }
  next();
});

app.use(express.static(path.join(__dirname)));
app.listen(8080, () => console.log("→ http://localhost:8080/index.html"));
