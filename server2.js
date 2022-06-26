const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const hostname = "127.0.0.1";
const port = "3000";

const mimeType = {
    htlm:"text/html",
    css:"text/css",
    js:"text/javascript",
    png:"image/png",
    jpeg:"image/jpeg",
    jpg:"image/jpg",
    woff:"font/woof"
};

http.createServer((req,res) => {

}).listen(port, hostname, () => {
    console.log(`Server está funcionando em https://${hostname}:${port}/`);
});
