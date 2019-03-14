const express = require('express');

const app = express();
const router = express.Router();

// cria uma rota na raiz
const route = router.get('/', (req, res, next) =>{
    res.status(200).send({
        title: "Node Store API",
        version: "0.0.1"
    });
});

app.use('/', route);

// exporta a aplicaçãp
module.exports = app;