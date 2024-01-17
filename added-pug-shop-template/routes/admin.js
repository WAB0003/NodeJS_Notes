const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = []; // Create an empty array to gather proudcts

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html')); //old way before using pug
  res.render('add-product', {
                              docTitle: 'Add Product', 
                              path: '/admin/add-product',
                              productCSS:true,
                              formsCSS: true,
                              activeAddProduct: true
                            })
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });               //Body is an an option because of 
  // console.log(req.body)
  res.redirect('/');
});

exports.routes = router;
exports.products = products;
