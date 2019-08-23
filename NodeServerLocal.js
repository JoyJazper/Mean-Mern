const http = require("http");
let fs = require("fs");
let url = require("url");

http.createServer( function (request, response){
    let pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " recieved.");
    fs.readFile(pathname.substr(1), funtion(err, data) {
        if(err) {
            console.log(err);
            Response.writeHead(404, {'Content-Type' : 'text/html'});
        }else{
            response.writeHead(200, {'Content-Type' : 'text/html'});
            response.write(data.toString());
        }
        response,end();

}).listen(3000);

console.log('Server running at localhost: 3000');