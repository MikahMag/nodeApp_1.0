var url = require('url');
var fs = require('fs');

function renderHTML(path,response){
    fs.readFile(path ,null ,function(error, data){
        if(error){
            response.writeHead(404);
            response.write('File not found.');
        }else{
            response.write(data);
        }
        response.end();
    });    
}

module.exports = {
    handleRequest: function(request, response){
        response.writeHead(200, {'Content-Type':'text/html'});
        path = url.parse(request.url).pathname;

        switch(path){
            case '/':
                renderHTML('./html/index.html');
                break;
            case '/login':
                renderHTML('./html/login.html');
                break;
            default:
                response.writeHead(404);
                response.write('route not defined.');
                response.end();
        }
    }
}