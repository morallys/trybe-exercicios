const express = require('express');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer ((req, res) => {

    res.statusCode = 200;
    res.setHeader ('Content-Type', 'test/plain');   
    res.end ('Mensagem!!');
});

server.listen (port, hostname, () => {
    console.log('Server rodando');
});

var name = prompt("Digite um nome do usuário: ");
console.log("Olá, ", name)
/*const app = express();
const path = require('path');
const router = express.Router();


router.get('/', function(req,res){

    res.sendFile(path.join(__dirname+'/index.html'));

})

app.use('/', router);
app.listen(process.env.port || 3000);    */

//var name = prompt("Digite um nome do usuário: ");


/*server.listen(port, hostname, () => {

    console.log("servidor rodando!")
})*/

//https://www.javascriptprogressivo.net/2018/07/Como-Receber-Dados-Usuario-Metodo-prompt.html