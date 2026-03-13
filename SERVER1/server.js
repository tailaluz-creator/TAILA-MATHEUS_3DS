//criar um servidor usando http (nativa node)
const http = require ('http');

const server = http.createServer((req,res)=>{
    console.log('Efetuando o pedido');
    res.write('pedido aceito');
})

server.listen(3000,'localhost',()=>{
    console.log('servidor iniciado');

})