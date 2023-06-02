const {createServer} = require('http');

let server = createServer((request, response) => {

    response.writeHead(200, {"content-type": "text/html"});
    response.write(`
    <h1>Hello World!</h1>
    <p>Primeira pagina com node.js</p>
    `);
    response.end();
});

server.listen(8000);

console.log("Ouvindo a porta 8000");