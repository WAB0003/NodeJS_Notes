ASSIGNMENT

1. Create a npm project and install Express.js (nodemon if you want)
    - run npm init to initialize npm project and get package.json file
    - run npm install --save-dev nodemon to get nodemon package
    - run npm install express
    - run npm install body-parser
    - run npm install ejs

    Once all dependenices have been installed, update 'start' script in package.json file
        "start": "nodemon app.js"
    run npm install and then use npm start to start connection to server

    Once setup is complete, create app.js file and bring in desired CORE modules, NPM modules, and connect to express server

    (new) set global configuration values for dealing with static css documents and EJS

    Use body-parser as a Middleware that parses incoming request data before they get sent to Handlers

2. Create and Express.js app that has (2) routes:
        - "/" - holds a form that allows user to input their name
        - "/users" - outputs a ul with uer names 
    
    - Create a routes directory for handlers (userForm & users)
    - In handler JS files, do the following:
        - path core modules
        - bring in express
        - create router Object using express.router
        - user Router Object to create routes for different requests (get, posts, etc.)
        - use res.render() to render an EJS page. 




