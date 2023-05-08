const express = require("express")
const server = express()
const dotenv = require("dotenv")
const db = require("./models")

// parse requests of content-type - application/json
server.use(express.json())

// parse requests of content-type - application/x-www-form-urlencoded
server.use(express.urlencoded({ extended: true }))

//Allow environment variables access
dotenv.config()

//Connect to database
db.mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("Successfully connected to database.")
    }).catch(err => {
        console.error("Connection error: ", err.message)
        process.exit()
    })

const PORT = process.env.PORT || 4001

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})