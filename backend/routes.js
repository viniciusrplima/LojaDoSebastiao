
const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');

// Rotas para manipulação dos produtos

// Rota de listagem - 
// retorna os produtos de determinada categoria
// ex.: localhost:5050/videogame
//
// categorias: tv, videogame, eletrodomestico, celular
//
router.get('/:category', productController.index);

// Rota de inserção - 
// insere um novo produto ao banco de dados
// ex.: localhost:5050/
// 	body: {
// 		name: "...", 
//		price: *, 
//		quandity: *, 
//		category: "..."
// 	}
//
// Nota: Ainda vou cuidar de tratar as fotos
// recebidas
//
router.post('/', productController.store);

// Rota de atualização - 
// atualiza um produto já existente no banco
// o valor _id do produto é necessário.
//
// ex.: localhost:5050/
// 	body: {
// 		_id: "...", 
// 		( ... )
// 	}
//
router.put('/', productController.update);

// Rota de remoção - 
// remove um produto do banco de dados
// passando como parâmetro o valor _id do 
// produto
// ex.: localhost:5050/sad4a6fs5dvs56f45
router.delete('/:id', productController.remove);


module.exports = router;
