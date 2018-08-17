// Require modules
var express = require('express');
var db = require('../models');
var router = express.Router();

// Define routes - remember ther are relative to /books
router.get('/', function (req, res){
    db.book.findAll().then(function (books){
        res.render('books/index',{books: books});
    }).catch(function (err){
        console.log(err);
        res.send('bad things happened. Oops');
    });
});
router.get('/new', function (req, res){
    res.render('books/new');
});
router.post('/', function (req, res){
    db.book.create(req.body).then(function(createdBook){
        console.log('book created, looks like', createdBook);
        res.redirect('/books');
    });
});
router.get('/:id', function (req, res){
    db.book.findById(req.params.id).then(function (foundBook){
        res.render('books/show',{book: foundBook});
    }).catch(function (err){
        console.log('err',err);
        res.render('404');
    });
});
router.delete('/:id',function (req, res) {
    db.book.destroy({
        where: { id: req.params.id }
    }).then(function (recentlyDeleted){
        res.send('deleted!');
    }).catch(function (err){
        res.send(err);  
    });
});
// Export the router - this lets other files include me
module.exports = router;
