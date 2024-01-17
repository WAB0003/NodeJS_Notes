const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
// const expressHBS = require('express-handlebars'); //needed only if you're using express handlebars

const app = express();

//!APP.SET() IS A GLOBAL CONFIGURATION METHOD WITH (2) ARGUMENTS:
//!  1. Setting Name - A list of application settings can be found on http://expressjs.com/en/4x/api.html#app.set   
//!  2. template engine - idenify what template engine your using for dynamic html (pug, EJS, express-handlebars)
//USING PUG TEMPALTE:
// app.set('view engine', 'pug');

//USING EXPRESS HANDLBARS:
// app.engine('handlebars', expressHBS()); //using .engine because express handlebars is NOT built in to nodejs. So it runs differently than pug
// app.engine('hbs', expressHBS({ layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname: 'hbs'})); // 1st argument can be named whatever you want. Just keep consistant and make sure it doesnt clash
// app.set('view engine', 'hbs');   //now set global configuration similar to pug above

//USING EJS
app.set('view engine', 'ejs');

app.set('views', 'views'); // This application setting ('views') identifies global configuration for WHICH directory is holdng html ('views' directory)

const adminData = require('./routes/admin'); //Bring in admin.js Middleware
const shopRoutes = require('./routes/shop'); //Bring in shop.js Middleware


//MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false})); //Middleware that essentially creates app.body object for data taht gets passed through app
app.use(express.static(path.join(__dirname, 'public'))); //express.static is a built in middleware for reading static files (css, etc).

//ROUTES (ORDER MATTERS)
app.use('/admin', adminData.routes);
app.use(shopRoutes);

//Catch all for any request not given instructions for.
app.use((req, res, next) => {
    // res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
    res.status(404).render('404', {docTitle: 'Page Not Found'});

});



app.listen(3000);
