const express = require("express")
const server = express()
const dotenv = require("dotenv")

//Set up global configuration access
dotenv.config()

const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})