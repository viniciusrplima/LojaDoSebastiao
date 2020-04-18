
const Product = require('../models/Product');
const aws = require('aws-sdk');

// Conecta ao banco de arquivos da AWS
const s3 = new aws.S3({
    accessKeyId: 'AKIA37WZAXA5ACYDQ75D', 
    secretAccessKey: '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', 
    region: 'sa-east-1'
});

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
    .then( data => {
        res.send(data);
    })
    .catch(err => {
        res.send(err);
    })

}

// Atualiza um produto com determinado id
const update = async (req, res) => {
    const _id = req.params.id;
    const data = req.body;
    const product = await Product.findByIdAndUpdate({ _id }, data);

    res.send(product);
}

// Remove um produto com determinado id
const remove = async (req, res) => {
    const _id = req.params.id;

    // Busca por um produto pelo id
    const product = await Product.findById( _id );

    // Verifica se o produto tem alguma foto
    // Se houver, deleta do banco de arquivos
    if(product.photoKey) {
        s3.deleteObject({
            Bucket: 'loja-do-sebastiao', 
            Key: product.photoKey
        }, (err, data) => {
            if(err) console.log(err);
        });
    }

    const result = await Product.findByIdAndDelete({ _id });
    res.send(result);
}

module.exports = {
    index,
    store, 
    update, 
    remove
};