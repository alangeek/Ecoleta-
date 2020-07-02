const express = require("express")
const server = express()


// configure public folder
server.use(express.static("public"))


// using template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})


// configure my application paths
// home page 
server.get("/", (req, res) => {
    return res.render("index.html", {title: "Seu marketplace de coleta de resíduos"})
})

server.get("/create-point", (req, res) => {
    return res.render("create-point.html")
})

server.get("/search", (req, res) => {
    return res.render("search-results.html")
})

// turn on the server
server.listen(3000)

// nodemon
// monitors changes that are occurring in the project and restarts alone