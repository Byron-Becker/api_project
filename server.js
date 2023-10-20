const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
    'age': 29,
    'birthName': 'Sheyaa',
    'birthLocation': 'London, Englance'
    },

    'Chance tha Rapper': {
    'age': 29,
    'birthName': 'Doushe ',
    'birthLocation': 'Philly'
    },

    '50 cent': {
    'age': 29,
    'birthName': 'Curtis Jackson',
    'birthLocation': 'Bronx, New York'
    }
    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    req.params.name
    res.json(rappers)
})


app.listen(PORT, () => {
    console.log(`You are rocking on port ${PORT}`)
})




















