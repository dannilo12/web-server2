const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

//const { hostname } = require('os');

hostname = "127.0.0.1";
port = "3000";

const mimetype = {
    htlm:"text/html",
    css:"text/css",
    js:"text/javascript",
    png:"image/png",
    jpeg:"image/jpeg",
    jpg:"image/jpg",
    woff:"font/woof"
};

http.createServer((req,res) => {
    
});
