//CORE MODULES
const path = require('path');

//NPM MODULES
const express = require('express');
const bodyParser = require('body-parser');

//VARIABLES
const app = express()   //? This Creates an Express App

const myRoutes = require('./routes/myRoutes'); //? Bring in route for userForm

//GLOBAL CONFIGURATION FOR EXPRESS APP
app.set('view engine', 'ejs');  //? Global configuration for selecting EJS as the 'html' styling template used
app.set('views', 'views');      //? Global configruation for telling the app WHERE to find these styling templates

//MIDDLEWARE (admin)
app.use(bodyParser.urlencoded({extended: false})); //Middleware that essentially creates app.body object for data taht gets passed through app
app.use(express.static(path.join(__dirname, 'css'))); //express.static is a built in middleware for reading static files (css, etc).//

//MIDDLEWARE (ROUTES):
app.use(myRoutes);

//CREATE CATCH ALL:
app.use((req,res,next)=>{
    res.status(404).render('catchAll', {pageTitle:'Page Not Found'})
})

app.listen(3000);// App listens to port 3000