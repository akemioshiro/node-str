'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const router = express.Router();

// conecta ao banco
mongoose.connect('mongodb://akemi:akemi1234@ds133570.mlab.com:33570/ndstr');

// Carrega as rotas
const indexRoute = require('./routes/index-route');
const productRoute = require('./routes/product-route');

// todo conteudo sera convertido para json
app.use(bodyParser.json());
// codifica a url
app.use(bodyParser.urlencoded({ extended: false}));

app.use('/', indexRoute);
app.use('/products', productRoute);

// exporta a aplicaçãp
module.exports = app;