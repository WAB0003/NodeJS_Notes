//CORE MODULES
const path = require('path');
//NPM Modules
const express = require('express');
const { render } = require('ejs');

//VARIBLES
const rootDir = path.dirname(process.mainModule.filename);
const router = express.Router();        //Create router object for handling routes
const users = [];

//CREATE ROUTES

router.get('/', (req,res,next)=>{
    res.render('userform', {pageTitle:'User Form Page'})
})

router.post('/users',(req,res,next)=>{
    users.push({username: req.body.username})
    console.log(users)
    res.redirect('/users')
})

router.get('/users', (req,res,next)=>{
    res.render('allUsers', {pageTitle:'All Users', users: users})
})

module.exports = router;