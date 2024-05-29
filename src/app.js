// gestion de rutas express
const express = require('express');


//creacion de la app express
const app = express();

app.use(express.json());

app.use('/api', require('./routes/api'));

module.exports = app;