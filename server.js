const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 savage': {
    'age': 29,
    'birthName': 'Sheyaa',
    'birthLocation': 'London, Englance'
    },

    'chance tha rapper': {
    'age': 29,
    'birthName': 'Doushe ',
    'birthLocation': 'Philly'
    },

    '50 cent': {
    'age': 29,
    'birthName': 'Curtis Jackson',
    'birthLocation': 'Bronx, New York'
    }
    
    'unkown': {
    'age': 29,
    'birthName': 'unknown',
    'birthLocation': 'unknown'
    }
    
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (req, res) => {
    const rapperName = req.params.name.toLowerCase()
    if(rappers[rapperName])
    res.json(rappers)
})


app.listen(PORT, () => {
    console.log(`You are rocking on port ${PORT}`)
})




















