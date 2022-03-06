const express = require('express');
const path = require('path');
const bodyParser =  require('body-parser');
const routes = require('./routes');
require('dotenv').config();

// Creando servidor de express
const app = new express();

// Carga de archivos estaticos
app.use(express.static('public'))

// Habilitando pug
app.set('view engine', 'pug');

// Agregando las vistar
app.set('views', path.join(__dirname, './views'))

// Habilitando bod parser para leer los datos del request
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', routes())

app.listen(process.env.PORT,()=>{
    console.log(`Server ready On http://localhost:${process.env.PORT}`)
})