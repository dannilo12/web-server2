//Chamada de módulos node

const http = require('http'); // http é o módulo que trata as entradas da camanda de aplicação em redes
const url = require('url'); //url é o módulo que trata da construção de urls
const fs = require('fs'); //fs é o módulo que trata a chamada e manipulação de arquivos no servidor
const path = require('path'); //

//Chamado do servidor

const hostname = '127.0.0.1"'; // Local onde a aplicação vai rodar
const port = '3000'; //  A porta da aplicação

//mimeTypes é um objeto que guarda quais os tipos de arquivos meu servidor vai estar carregando
const mimeType = {
    htlm:"text/html",
    css:"text/css",
    js:"text/javascript",
    //php:"text/php",
    png:"image/png",
    jpeg:"image/jpeg",
    jpg:"image/jpg",
    woff:"font/woof"
};

//Criação do servidor
http.createServer((req,res) => {
    let acesso_uri = url.parse(req.url).pathname; //Declaração da variável acesso_uri. a URI é um termo que trata de forma geral os caminhos dos diretórios do servidor

    let caminho_de_acesso = path.join(process.cwd(), decodeURI(acesso_uri));
    console.log(caminho_de_acesso);

    let recurso_carregado;
    //try {
        recurso_carregado =  fs.lstatSync(caminho_de_acesso);
    /*} catch (erro) {
        res.writeHead(404, {'Content-Typ':'text/plain'});
        res.write('Error 404! Arquivo não encontrado!');
        res.end();

    }*/

    if (recurso_carregado.isFile()) {
       let mimeType = mimeTypes[path.extname(caminho_de_acesso).substring(1)];

       res.writeHead(200, {'Content-Type': mimeType});
       let fluxo_arquivo = fs.createReadStream(caminho_de_acesso);
       fluxo_arquivo.pipe(res);

    } else if (recurso_carregado.isDirectory()){
        res.writeHead(302, {'Location': 'index.html'});
        res.end();

    } else {
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.write("500: Erro Interno do Servidor!");
        res.end();
    }
   

    //Método de escuta do servidor, ou seja, é nesse método que o servidor observa o que é requsitado para o sistema
}).listen(port, hostname, () => {
    console.log(`Server está funcionando em https://${hostname}:${port}/`);
});
