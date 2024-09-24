const http = require("http");


const server = http.createServer((req , res)=> {
    if(req.url === '/'){
        res.end("hello to the home page")
    }
    if(req.url === "/about"){
        res.end("what questions do u have")
    }
})


server.listen(5000)