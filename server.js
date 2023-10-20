const express = require('express')
const app = express()
const PORT = 8000

const savage = {
    'age': 29,
    'birthName': 'Sheyaa',
    'birthLocation': 'London, Englance'
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    res.json(savage)
})


app.listen(PORT, () => {
    console.log(`You are rocking on port ${PORT}`)
})




















