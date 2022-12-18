require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const { routes } = require('./routes/game.routes')
const { url } = require('./config/db.config')

const PORT = process.env.PORT || 8080

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)
mongoose.connect(url)

app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`)
})
