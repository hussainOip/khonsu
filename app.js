const express = require('express')
const app = express()
const route = require('./src/api/route')

app.use('/api', route);

const port  = process.env.PORT || 3000
app.listen(port, ()=>{
    console.log("Server is running in port ",port);
})