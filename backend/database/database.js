
const mongoose = require('mongoose');

// URL para o Banco de Dados
const DATABASE = 'mongodb+srv://sebastiaosilva:sebastiao2020@cluster0-fbga6.gcp.mongodb.net/test?retryWrites=true&w=majority';

const connect = () => {
    
    // Conecta ao banco de dados
    mongoose.connect(DATABASE, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    
    let db = mongoose.connection
    
    db.once('open', () => { console.log('Conectado ao Banco de Dados.') });
    db.on('error', error => { console.log(error) });
}

module.exports = {
    connect
};