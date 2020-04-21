
require('dotenv').config();
const express = require('express');
const router = require('./routes');
const mongo = require('./database/mongo');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT;

// Conecta ao banco de dados
mongo.connect();

// Todos os Bodies de requisicoes serao tratadas no formato JSON
app.use(express.json());

app.use(cors());

// Adiciona todas as rotas a api
app.use(router);

app.listen(PORT, error => {
    if(error) {
        console.log(error);
    }
    else {
        console.log('Server running on port', PORT);
    }
});
