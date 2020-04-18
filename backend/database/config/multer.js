
const path = require('path');
const crypto = require('crypto');
const multerS3 = require('multer-s3');
const aws = require('aws-sdk');

// Arquivo de Configuração do Multer
// Com ele conseguimos acessar o banco de arquivos da AWS
module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'uploads'), 
    storage: multerS3({
        s3: new aws.S3({
            accessKeyId: 'AKIA37WZAXA5ACYDQ75D', 
            secretAccessKey: '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', 
            region: 'sa-east-1'
        }), 
        bucket: 'loja-do-sebastiao', 
        contentType: multerS3.AUTO_CONTENT_TYPE, 
        acl: 'public-read',
        key:  (req, file, cb) => {
            crypto.randomBytes(16, (err, hash) => {
                if(err) cb(err);

                const fileName = `${hash.toString('hex')}-${file.originalname}`;

                cb(null, fileName);
            })
        }
    }),
    limits: {
        // Tamanho máximo do arquivo da imagem em bytes
        fileSize: 2 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
        const allowedMimes = [
            "image/jpeg", 
            "image/pjpeg", 
            "image/png", 
            "image/gif"
        ];

        if(allowedMimes.includes(file.mimetype)) {
            cb(null, true);
        }
        else {
            cb(new Error("Invalid file type."));
        }
    }
};