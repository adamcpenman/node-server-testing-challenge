const express = require("express")

const server = express()

server.use(express.json())

server.get("/", (req, res) => {
    res.send("NODE SERVER TESTING")
})

module.exports = server