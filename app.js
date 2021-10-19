const express = require('express')
const app = express()
app.set('view engine','hbs')

app.get('/',(req,res)=>{
    res.render('home')
})

const PORT = process.env.PORT || 5000
app.listen(PORT)
console.log('Bin_Shop is activity!!!!')