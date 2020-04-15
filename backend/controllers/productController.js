
const Product = require('../models/Product');

const index = async (req, res) => {
    const category = req.params.category;
    const products = await Product.find({ category });
    res.send(products);
}

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

const update = async (req, res) => {
    
}

module.exports = {
    index,
    store, 
    update
};