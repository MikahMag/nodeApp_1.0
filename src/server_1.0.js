var http = require("http");
var app = require("./app_1.0");

let port = 8000;
http.createServer(app.handleRequest).listen(port);