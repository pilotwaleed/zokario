// Minimal static server for local preview/QA (not part of the deployed site)
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const MIME = {
  ".html": "text/html; charset=utf-8", ".css": "text/css", ".js": "text/javascript",
  ".mjs": "text/javascript", ".json": "application/json", ".svg": "image/svg+xml",
  ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp",
  ".mp4": "video/mp4", ".txt": "text/plain", ".xml": "application/xml", ".ico": "image/x-icon"
};

createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (path === "/") path = "/index.html";
    const file = normalize(join(ROOT, path));
    if (!file.startsWith(normalize(ROOT))) throw new Error("traversal");
    const data = await readFile(file);
    const type = MIME[extname(file)] || "application/octet-stream";
    const total = data.length;
    const range = req.headers.range;
    if (range) {
      // Safari refuses to play <video> unless the server honors byte-range requests (206).
      const m = /^bytes=(\d*)-(\d*)$/.exec(range.trim());
      if (m && (m[1] || m[2])) {
        const start = m[1] === "" ? total - Number(m[2]) : Number(m[1]);
        const end = (m[2] === "" || m[1] === "") ? total - 1 : Number(m[2]);
        if (start >= 0 && end < total && start <= end) {
          res.writeHead(206, {
            "Content-Type": type, "Accept-Ranges": "bytes",
            "Content-Range": `bytes ${start}-${end}/${total}`,
            "Content-Length": end - start + 1
          });
          return res.end(data.subarray(start, end + 1));
        }
        res.writeHead(416, { "Content-Range": `bytes */${total}`, "Accept-Ranges": "bytes" });
        return res.end();
      }
    }
    res.writeHead(200, { "Content-Type": type, "Accept-Ranges": "bytes", "Content-Length": total });
    res.end(data);
  } catch {
    try {
      const nf = await readFile(join(ROOT, "404.html"));
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end(nf);
    } catch {
      res.writeHead(404); res.end("Not found");
    }
  }
}).listen(8123, () => console.log("zokario preview on http://localhost:8123"));
