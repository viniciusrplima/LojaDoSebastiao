
const mongoose = require('mongoose');

// URL para o Banco de Dados
const DATABASE = 'mongodb+srv://sebastiaosilva:sebastiao2020@cluster0-fbga6.gcp.mongodb.net/test?retryWrites=true&w=majority';

const connect = () => {
    
    // Conecta ao banco de dados
    mongoose.connect(DATABASE, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });

    // Make Mongoose use `findOneAndUpdate()`. Note that this option is `true`
    // by default, you need to set it to false.
    mongoose.set('useFindAndModify', false);
    
    let db = mongoose.connection
    
    db.once('open', () => { console.log('Conectado ao Banco de Dados.') });
    db.on('error', error => { console.log(error) });
}

module.exports = {
    connect
};