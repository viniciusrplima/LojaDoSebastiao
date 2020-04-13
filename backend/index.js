const express = require('express');
const router = require('./routes');
const mongoose = require('mongoose');
const app = express();

const PORT = 5050;

// Modificar antes de colocar no ar
const DATABASE = 'mongodb://localhost/items';


// Conecta ao banco de dados
mongoose.connect(DATABASE, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

let db = mongoose.connection

db.once('open', () => { console.log('Conectado ao Banco de Dados.') });
db.on('error', error => { console.log(error) });

// Todos os Bodies de requisicoes serao tratadas no formato JSON
app.use(express.json());

// Adiciona todas as rotas ao app
app.use(router);

app.listen(PORT, error => {
    if(error) {
        console.log(error);
    }
    else {
        console.log('Server running on port', PORT);
    }
});