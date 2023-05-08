const express = require("express")
const server = express()

const PORT = 4000

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})