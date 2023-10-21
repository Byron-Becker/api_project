const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    response.sendFile(__dirname + '/index.html')
})

app.listen(, () => {
    console.log(`You are rocking on port ${PORT}`)
})




















