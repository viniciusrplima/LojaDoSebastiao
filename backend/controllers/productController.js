
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
    const _id = req.body._id;
    const data = req.body;
    const product = await Product.findByIdAndUpdate({ _id }, data);

    res.send(product);
}

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