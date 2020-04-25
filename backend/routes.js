
const express = require('express');
const multer = require('multer');
const multerConfig = require('./database/config/multer');

const router = express.Router();
const productController = require('./controllers/productController');
const imageController = require('./controllers/imageController');

const authController = require('./controllers/authController');

// Rotas para manipulação dos produtos

// Rota de listagem - 
// retorna os produtos de determinada categoria
// ex.: localhost:5050/videogame
//
// categorias: tv, videogame, eletrodomestico, celular
//
router.get('/:category', authController.accessVerify, productController.index);

// Rota de inserção - 
// insere um novo produto ao banco de dados
// ex.: localhost:5050/
// 	body: {
// 		name: "...", 
//		price: *, 
//		quandity: *, 
//		category: "..."
// 	}
//  retorna o produto armazenado
//
router.post('/', authController.accessVerify, productController.store);

// Rota de atualização - 
// atualiza um produto já existente no banco
// o valor _id deve ser passado como parâmetro.
//
// ex.: localhost:5050/dofsansdfn532
// 	body: {
// 		( ... )
// 	}
//
router.put('/:id', authController.accessVerify, productController.update);

// Rota de remoção - 
// remove um produto do banco de dados
// passando como parâmetro o valor _id do 
// produto
// ex.: localhost:5050/sad4a6fs5dvs56f45
router.delete('/:id', authController.accessVerify, productController.remove);

// Rota de atualização de imagem
// Utiliza body no formato Multipart
// Recebe um arquivo e salva como imagem para o produto
// com id passado como parâmetro
// A imagem deve ser enviada com nome "file"
router.post('/image/:id', authController.accessVerify, 
			  multer(multerConfig).single("file"), 
			  imageController.update);

// Rotas de autenticação
router.post('/auth', authController.authentication);
router.post('/verify', authController.accessVerify);
router.post('/logout', authController.logout);

module.exports = router;
