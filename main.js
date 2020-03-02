const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.get('/', function(req, res) {
    res.sendfile(__dirname+'/public/index.html')
})

app.listen(port, () => console.log(`Nisses app on ${port}`))