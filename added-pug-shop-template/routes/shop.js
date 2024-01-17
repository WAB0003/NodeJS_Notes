const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
  const products = adminData.products;
  //Render method always looks for 'views' app setting (app.js)
  //res.RENDER. Method with 2 arguments (view and options)
  res.render('shop',  {
                        prods: products, 
                        docTitle: 'Shop', 
                        path: '/shop', 
                        hasProducts: products.length>0,
                        activeShop: true, 
                        productCSS: true             
                      });  
});

module.exports = router;
