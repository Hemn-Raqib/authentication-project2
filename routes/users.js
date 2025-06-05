const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

//Adding file system
//const fs = require('fs');

const User = require('../model/User'); // Go up one level to the 'models' folder

// This is a mock object to simulate user storage
const userDatabase = [];


//Login Page
router.get('/login', (req,res) => res.render(`login`));
//Logout page
router.get('/logout', (req,res) => res.render(`logout`));


//Register Page
router.get('/register', (req,res) => res.render(`register`));



//Register Handle
router.post('/register', (req, res) => {

    //By using this line of code below we can pulling out those 
//variables out from our form in register.ejs
    const { name, email, password, password2 } = req.body;

     let errors = [];

     //Check Required Fields
   if(!name || !email || !password || !password2)
{
    errors.push({ msg : `Please Fill in All Fields`});
}

//Check Password Math
if(password !== password2)
{
    errors.push({ msg : `Password do not match`});
}

//Check password length
if(password.length < 6)
{
    errors.push({ msg : `Password Should be at least 6 characters`});
}

if(errors.length > 0)
{
   res.render('register', {
    errors,
    name,
    email,
    password,
    password2
   });
}
else {
    // Simulate finding a user by email
    const existingUser = userDatabase.find(user => user.email === email);
    if (existingUser) {
      errors.push({ msg: 'Email already exists' });
      res.render('register', {
        errors,
        name,
        email,
        password,
        password2
      });
    } else {
      const newUser = new User(name, email, password);
      userDatabase.push(newUser);
       // You can customize this response
      //console.log(userDatabase);
      res.redirect('/users/login');
    
  }
}



/*
else 
{
    //Validation passed
    //res.send('pass');
    const newUser = new User({
        name,
        email,
        password
    });
    console.log(newUser);
    //dataObj.push({ name, email, password, password2 });
    //res.send(dataObj);
    res.send('hello');
}*/

});

//Chatgpt Code
// ... (other imports and route handlers)

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  let errors = [];

  if (!email || !password) {
    errors.push({ msg: 'Please Fill in All Fields' });
  }

  // Simulate finding a user by email
  const existingUser = userDatabase.find(user => user.email === email);
  if (existingUser) {
    if (existingUser.password === password) {
      res.render('dashboard', { user: existingUser.name }); // Redirect to dashboard with user's name
    } else {
      errors.push({ msg: 'Password is not Correct' });
      res.render('login', {
        errors,
        email,
        password
      });
    }
  } else {
    errors.push({ msg: 'Email not found' });
    res.render('login', {
      errors,
      email,
      password
    });
  }
});

// ... (other route handlers)


// ... (other route handlers)







/*
router.post('/login', (req, res) => {
    //By using this line of code below we can pulling out those 
//variables out from our form in register.ejs
    const { name, email, password, } = req.body;
    let errors = [];
    if(!email || !password)
    {
        errors.push({ msg : `Please Fill in All Fields`});
    }

    //Check Password Math
if(password !== password)
{
    errors.push({ msg : `Password is not Correct`});
}

if(password.length < 6)
{
    errors.push({ msg : `Password Should be at least 6 characters`});
}


if(errors.length > 0)
{
   res.render('login', {
    errors,
    email,
    password
   });
}
else {
 // Simulate finding a user by email
 const existingUser = userDatabase.find(user => user.email === email);
 if (existingUser) {
  res.render('/users/dashboard' , { user : name});
 } 
 else {
  
    // You can customize this response
   //console.log(userDatabase);
   res.redirect('/users/login');
 
}
}
});
*/





// showing data 
router.get('/show', (req, res) => {
    // ... (rest of your existing code)
  
    if (userDatabase.length > 0) {
      res.send(userDatabase );
    } else {
      res.send('No data available');
    }
  });
  


module.exports = router;





