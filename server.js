const express = require('express')
const connectDb = require('./config/db')

const app = express()

connectDb()

const PORT = process.env.PORT || 5000

// middleware for getting body data sent from frontend
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users', require("./routes/api/users"))
app.use('/api/auth', require("./routes/api/auth"))
app.use('/api/profile', require("./routes/api/profile"))
app.use('/api/posts', require("./routes/api/posts"))

app.listen(PORT, ()=>console.log(`listening in port ${PORT}`))