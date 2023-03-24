const http = require('http')

const server = http.createServer((req, res)=>{
    res.end(`<a href="https://npm.js.com">npm</a>`)
    console.log(req)
})

server.listen(5000)