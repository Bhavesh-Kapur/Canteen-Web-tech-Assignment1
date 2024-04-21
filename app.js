const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const ejs = require('ejs')
const path = require('path');
const port = 3000
const app = express();
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/menu', (req,res)=>{
    res.render('menu')
})

app.get('/contactus', (req,res)=>{
res.render('contactus')
})


app.get('/index', (req,res)=>{
    res.render('index')
    })
app.listen(port, ()=>{
    console.log('Server at 3000')
})