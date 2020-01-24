const express = require("express")
const ReRo = require("./resources/resources-router")

const server = express()

server.use(express.json())

server.use("/resources", ReRo)

server.get("/", (req, res) => {
    res.send("NODE SERVER TESTING")
})

module.exports = server