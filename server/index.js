require('dotenv').config()
const express = require('express')
const massive = require('massive')

const { CONNECTION_STRING, SERVER_PORT } = process.env
const pc = require('./controller')

const app = express()

app.use(express.json())

massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
    console.log('DB set!')
})
    .catch(err => console.log(err))


    app.get('/api/products', pc.seeAll)
    app.post('/api/products', pc.create)
    app.delete('/api/products/:id', pc.delete)
    app.put('/api/products/:id', pc.update)

app.listen(SERVER_PORT, () => {
    console.log(`Listening on port: ${SERVER_PORT}`)
})
