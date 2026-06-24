const http = require("http")


const PORT = 5000;

const server = http.createServer((req, res)=> {
    if (req.url == "/") {
        res.writeHead(200, { "content-Type":"text/html"});
        res.end("<h1> Welcome to http server.!!</h1>")
    }

    else if (req.url == "/about") {
        res.writeHead(200, { "content-Type":"text/html"});
        res.end("<h1> About us</h1>")
    }

     else if(req.url=="contact"){
        res.writeHead(200,{"content-Type":"text/html"});
        res.end("<h1> We are with you anytime 24/7 always..</h1>")
    }
    else{
         res.writeHead(404,{"content-Type":"text/html"});
        res.end("<h1> Page not found/.!</h1>")
    }
})

server.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`)
})