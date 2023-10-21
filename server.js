const express = require('express')
const app = express()
const PORT = 8000

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(PORT, () => {
    console.log(`You are rocking on port ${PORT}`)
})




















