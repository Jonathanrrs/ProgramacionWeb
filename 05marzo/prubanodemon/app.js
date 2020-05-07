//Para estodebemos instalar en la consola http, con npm i http
var http = require('http');
var fs = require('fs');  //instalar tambien este paquete con npm i fs


http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var html = fs.readFileSync(__dirname + '/index.html'); //mandamos el archivo como variable
    res.end(html);
}).listen(1337, '127.0.0.1');

//dark sky api nos registramos, correo ucol

//instalar a chrome json formatter