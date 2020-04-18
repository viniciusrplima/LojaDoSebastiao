
const Product = require('../models/Product');

// Retorna uma lista dos produtos de determinada categoria
const index = async (req, res) => {
    const category = req.params.category;
    const products = await Product.find({ category });
    res.send(products);
}

// Armazena um produto
const store = async (req, res) => {

    const product = new Product(req.body);

    await product.save()
    .then(() => {
        res.send('Produto Salvo');
    })
    .catch(err => {
        res.send(err);
    })

}

// Atualiza um produto com determinado id
const update = async (req, res) => {
    const _id = req.body._id;
    const data = req.body;
    const product = await Product.findByIdAndUpdate({ _id }, data);

    res.send(product);
}

// Remove um produto com determinado id
const remove = async (req, res) => {
    const _id = req.params.id;
    const product = await Product.findByIdAndDelete({ _id });
    res.send(product);
}

module.exports = {
    index,
    store, 
    update, 
    remove
};