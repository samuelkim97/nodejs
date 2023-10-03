const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("this is our home page!");
  }
  if (req.url === "/about") {
    res.end("this is our short history");
  }

  res.end(`
    <h1 style="font-size: 50px">Oops! there is no page that you looking for!</h1>
    <a href="/">back home</a>
  `);
});

server.listen(5000);
