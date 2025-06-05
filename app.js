const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

//const mongoose = require('mongoose');

// < Bu using this line of code now we 
//can get data from our form with ( req.body ) 
app.use(express.urlencoded({ extended : false })); //Bodyparser



//EJS Start
//Initializing EJS Layouts
const expressLayouts = require("express-ejs-layouts"); 

//Adding a bit of middlewear ( EJS )
app.use(expressLayouts);//By Adding this line code we can use EJS Layouts or we can't use it.
//Setting our view engin to EJS
app.set('view engine','ejs');
//EJS End


//Routes //in this line code below all the routes inside 
//index.js will be available to this file 
//if you have a route defined as /about in index.js, it would be 
//accessible at ( http://yourdomain.com/about ).
//but if write your app.use in this file like this
//app.use('/api', require('./routes/index'));
//In this case, all the routes defined in index.js 
//would be accessible under 
//the /api subpath, like ( http://yourdomain.com/api/about ).
app.use('/', require('./routes/index'))
app.use('/users', require('./routes/users'))


app.listen(PORT, console.log(`Server Running on Port ${PORT}....`));





