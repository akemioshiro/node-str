const express = require('express');
const bodyParser = require('body-parser')

const app = express();
const router = express.Router();

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