const express = require('express')
const app = express()
const cors = require('cors')
const conn = require('./db/conn')
const routes = require("./routes/router")

app.use(express.json())
app.use(cors())
app.use('/', routes)

conn()

require('dotenv').config();

const mongoString = process.env.DATABASE_URL

app.listen(3000, () => {
  console.log(`Server started at ${3000} ⚡`)
})