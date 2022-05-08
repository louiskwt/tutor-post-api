const express = require('express')
const cors = require('cors')

const { db, connect } = require('./config/database')

const app = express()

//  connecting AWS RDS
connect(db)

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => res.send("This is Tutor Post's backend"))

// Post routes
app.use('/posts', require('./routes/posts'))

const PORT = process.env.PORT || 8000

app.listen(PORT, console.log(`Server started at port: ${PORT}`))