var http = require('http').createServer()
function webServer(req, res)
{
    res.writeHead(200, {'Content-Type':'text/html'})//200 es que está todo bien. 400 not provide y 404 not found
    res.end('<h1>Hola Node.js</h1><p>Bienvenidos a mi servidor</p>')
}
http
    .on('request', webServer)
    .listen(3000, 'localhost')//puerto 3000 y dominio local

console.log('Servidor corriendo en http://localhost:3000/')
