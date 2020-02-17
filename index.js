const http = require('http');
const petshop = require('./petshop');

const server = http.createServer((req, res)=>{

    if(req.url == "/listaspets" || req.url == "/listasPets"){
        let resultado = petshop.listarPets();

        return res.end(resultado);
    }

     res.setHeader("Content-Type","text/html;charset=utf8")
     res.write("Você está dentro do sistema petshop")
     res.end()
})

server.listen(1010, 'localhost')