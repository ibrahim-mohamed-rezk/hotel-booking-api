const express = require('express')

const app = express()

app.get('/:product', (req, res)=>{
    console.log('user hit the server')
    res.send('hello user') 
    console.log(req.query, req.params)
    // res.json({name: 'hema'})
})


app.all('*', (req, res)=>{
    res.status(404).send('<h2>Page not found</h1>')
})


app.listen(8000, ()=>{
    console.log('server is running')
})
