const express = require('express')
const db = require('./config/database')

const app = express()


db.connect()

app.get('/', (req, res) => res.send('Hello'))

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server started at port: ${PORT}`))