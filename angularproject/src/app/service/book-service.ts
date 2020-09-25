import {Book} from './book'; 

export interface BookService{
    addBook(book:Book):boolean;    
    getBooks(): Book[];    
    getBook(isbn:string):Book|null;
}

