//Load HTTP module
const http = require("http");
let fs = require('fs');
let url = require('url');
const hostname = '127.0.0.1';
const port = 3000;

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

/*
//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {

    //Set the response HTTP header with HTTP status and Content type
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});*/