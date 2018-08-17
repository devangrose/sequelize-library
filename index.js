// Require needed node module
var bodyParser = require('body-parser');
var ejsLayouts = require('express-ejs-layouts');
var express = require('express');


// Global variables
var app = express();

// Set and use statements
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(ejsLayouts);

// Include any contollers/routers
app.use('/books', require('./controllers/books'));

// Define routes
app.get('/', function (req, res) {
    res.redirect('/home');
});
app.get('/home', function (req, res){
    res.render('home');
});

// listen on port 3000
app.listen(3000, function (){
    console.log('ONE OF US, ONE OF US, ONE OF US');
});
