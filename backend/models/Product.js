const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name: { type: String, unique: true, required: true }, 
    price: { type: Number, required: true }, 
    quantity: { type: Number, required: true }, 
    photoURL: { type: String }, 
    photoKey: { type: String },
    category: { 
        type: String, 
        enum: [
            'tv', 
            'eletrodomestico', 
            'videogame',
            'celular'
        ]
    }
})


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
