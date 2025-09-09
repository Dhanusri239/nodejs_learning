const express = require('express');
const router = express.Router();

const products = [];

router.get('/add-product', (req, res, next) => {
    res.render('addproduct', { docTitle: "Add Product", products: products });
});

router.post('/add-product', (req, res, next) => {
    products.push({ name: req.body.title });
    res.redirect('/admin/add-product');
});

module.exports = router;
