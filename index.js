const server = require("./server")

const port = process.env.PORT || 4000

if (!module.parent) {
server.listen(port, () => {
  console.log(`\n=> Server up at http://localhost:${port}\n`)
})
}
