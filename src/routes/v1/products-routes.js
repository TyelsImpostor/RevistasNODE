const express = require('express');

const productsControllers = require('../../controllers/v1/products-controller');

const router = express.Router();

router.post('/create' , productsControllers.createProduct);
router.post('/delete' , productsControllers.deleteProduct);
router.post('/get-all' , productsControllers.getProducts);


module.exports =router;
