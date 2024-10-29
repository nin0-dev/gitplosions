const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("hi mom");
});

server.listen(9874, () => {
    console.log(`Server running on port 9874`);
});
