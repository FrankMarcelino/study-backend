import http from "node:http";
import url from "node:url";
import fs from "node:fs/promises";
import { createReadStream } from "node:fs";

const server = http.createServer();

server.on("request", async (req, res) => {
  const filePath = url.parse(req.url).pathname;
  const processPath = process.cwd();

  try {
    await fs.stat(processPath + filePath);
    const readStream = createReadStream(processPath + filePath);
    res.writeHead(200, { "content-type": "text/html" });
    readStream.pipe(res);
  } catch (err) {
    res.writeHead(404);
    res.end("Not found");
    return;
  }
});

server.listen(8000);
