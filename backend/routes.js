
const express = require('express');
const router = express.Router();
const productController = require('./controllers/productController');

router.get('/:category', productController.index);
router.post('/', productController.store);
router.put('/', productController.update);
router.delete('/:id', productController.remove);

module.exports = router;