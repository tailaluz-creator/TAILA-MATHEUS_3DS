const http = require('http');
let port = 3000
let host = 'localhost'
const fs = require('fs');

const server = http.createServer((req, res) => {

    // CSS
    if(req.url == "/style.css"){
        res.setHeader('Content-Type', 'text/css');
        fs.readFile('./html/style.css', (err, data) => {
            res.end(data);
        });
    }

    // FOTO
    else if(req.url == "/foto.jpg"){
        res.setHeader('Content-Type', 'image/jpeg');
        fs.readFile('./html/foto.jpg', (err, data) => {
            res.end(data);
        });
    }

    // HTML
    else{
        res.setHeader('Content-Type', 'text/html');
        fs.readFile('./html/pag2.html', (err, data) => {
            if (err) {
                console.log("Erro ao carregar a página");
                res.end("Erro ao carregar a página");
            }else{
                res.end(data);
            }
        });
    }

});

server.listen(port, host, () => {
    console.log("Servidor no ar!!!");
});