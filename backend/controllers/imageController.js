
const Product = require('../models/Product');
const aws = require('aws-sdk');

// Conecta ao banco de arquivos da AWS
const s3 = new aws.S3({
    accessKeyId: 'AKIA37WZAXA5ACYDQ75D', 
    secretAccessKey: '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', 
    region: 'sa-east-1'
});


// Faz o upload de uma imagem para um produto
// Se o produto já possuir uma imagem ele deleta
// a atual e insere a nova
const update = async (req, res) => {
    const { key: photoKey, location: photoURL } = req.file;
    const _id = req.params.id;

    const product = await Product.findById( _id );

    if(product.photoKey) {
        s3.deleteObject({
            Bucket: 'loja-do-sebastiao', 
            Key: product.photoKey
        }, (err, data) => {
            if(err) console.log(err);
        });
    }

    await Product.findByIdAndUpdate({ _id }, {
        photoKey, 
        photoURL
    });

    res.send('Foto atualizada');
}

module.exports = {
    update
};