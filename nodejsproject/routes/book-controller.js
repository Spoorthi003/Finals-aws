const BookService = require("../services/book-service");
const Book=require('../entities/book');
const BookRepository=require('../repositories/book-repository');



let bookRepository = new BookRepository();

var bookService = new BookService(bookRepository);


async function  getBookList(request,response){
    
    var books=await bookService.getAll();
    await response.render('books/booklist', {books:books});
}


async function  showBookForm(request,response){

    var book={};
    await response.render('books/createbook', {book:book});

}

async function addBook(request,response){
    var book=request.body;
    try{
    await bookService.add(book);
    await response.redirect('/books');
    }catch(e){
        console.log(e.message);
    }
}

async function showBookDetails(request,response){

    let id= request.params.bookId; 

    let book=await bookService.getById(id);

    await response.render('books/bookdetails',{book});

};


async function editBookDetails(request,response){

    let id= request.params.bookId;
    let book=await bookService.getById(id);
    await response.render('books/editbook',{book});

   
    try{
    await bookService.remove(book.id);
    await bookService.add(book);
    await response.redirect('/books');
    }catch(e){
        console.log(e.message);
    }

    

};


async function removeBook(request,response){
    let id=request.params.bookId;
    console.log("delete   ..........!!")
    await bookService.remove(id);
    await response.redirect('/books');
}



var express = require('express');
const { render } = require("ejs");
var router = express.Router();


router.get('/', getBookList);
router.get('/createbook', showBookForm);
router.post('/createbook', addBook);

router.get('/bookdetails/:bookId', showBookDetails);
router.get('/editbook/:bookId', editBookDetails);

router.get('/deletebook/:bookId', removeBook);



module.exports = router;




