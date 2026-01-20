const http = require("http");
const server=http.createServer(req,res)=>{
    switch(req.url){
        case "/" :
            res.writeHead(200,{"content-type" : "text/html"})
            res.end("<h1> Welcome to home page </h1>")
            break;
        case "/about":
            res.writeHead(200,{"content-type" : "text/html"})
            res.end("<h1> Welcome to home page </h1>")
            break;
        default:
            res.writeHead(404,{"content - tyoe":"text/html"})
            res.end("<h1> Page not found </h1>")
    }
}