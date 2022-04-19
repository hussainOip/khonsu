const express = require('express')
const app = express()
const route = require('./src/api/route')
const mongoose = require('mongoose')
app.use(express.json());
app.use('/api', route);

const port = process.env.PORT || 3000
const url = 'mongodb://localhost/khonsu'

mongoose.connect(url).then(() => {
    app.listen(port, () => {
        console.log("Server is running in port ", port);
    })
    console.log('Database connected successfully')
}).catch((err) => {
    console.log('connection error')
})