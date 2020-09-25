import {SimpleBookService} from './simple-book-service'; 
import {Book} from './book'; 


describe('SimpleBookServiceTest',function(){

    let service;
    let currentBookCount;

    beforeEach(()=>{
        service=new SimpleBookService();
        currentBookCount=service.getBooks().length;
    });

    it('should fail to add a null object',()=>{

        let result=service.addBook(null);

        expect(result).toBeFalse();
        expect(service.getBooks().length).toBe(currentBookCount);
    });

    
    it('should fail to add a book without isbn',()=>{


        let result=service.addBook({title:'The Accursed God'});

        expect(result).toBeFalse();
        expect(service.getBooks().length).toBe(currentBookCount);
    });

    it('should  to add a book with isbn,title and author',()=>{


        let result=service.addBook({title:'The Accursed God',author:'Vivek',isbn:1234});

        expect(result).toBeTrue();
        expect(service.getBooks().length).toBe(currentBookCount+1);
    });


});

