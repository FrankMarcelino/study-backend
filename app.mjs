import http from "node:http";

const server = http.createServer();

server.addListener("request", (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("meu primeiro servidor");
  res.end();
});

server.listen(8000);
