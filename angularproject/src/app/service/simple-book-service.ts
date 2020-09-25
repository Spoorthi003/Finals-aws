import {Book} from './book'; 
import {BookService} from './book-service'; 


export class SimpleBookService implements BookService{

    private books:Book[];
    static serviceCount=0;
    private serviceId;
    
    constructor() {
        this.serviceId=++SimpleBookService.serviceCount;
        console.log(`SimpleBookService created with id ${this.serviceId}`);

        this.books=this.books=[
            {
              "title": "The Accursed God",
              "author": "Vivek Dutta Mishra",
              "description": "The epic tale of Mahabharata searching if it was just a family fued as you were made to believe or it was the first world war? Follow through the first book of The Lost Epic Series",
              "isbn": "00108",
              "pages":350,
              "votes":39,
              "series":"The Lost Epic",
              "seriesIndex":1,
              "price": 199,
              "rating": 4.8,
              "releaseDate":'01/15/2020',
              "cover": "the-accursed-god-w.jpg",
              "tags": "Indian Epic, Mahabharata, Book Series".split(',')
            },
            {
              "title": "The Count of Monte Cristo",
              "author": "Alexandre Dumas",
              "description": "The story of a person wrongly implicated for a false crime and is send to prison. He returns  to seek the vengeane, love and justice.",
              "isbn": "7126",

              "releaseDate":'01/04/1836',
              "pages":350,
              "votes":12000,              
              "price": 250,
              "rating": 4.8,
              "cover":"",
              "tags": "Crime,Adventure,Classic,Best-Seller,Revenge,Justice".split(',')
            },
            {
              "title": "Kane And Abel",
              "author": "Jeffrey Archer",
              "description": "story of two men born on the same date on opposite side of the globe and economy and years later fate brings them for a head on collission. The best selling book by the author.",
              "isbn": "78983",
              "releaseDate": '01/05/1977',
              "price": 220,
              "pages":350,
              "votes":1500,              
              "rating": 3.5,
              "cover":"",
              "tags": "best-seller,chronology".split(',')
            },
            {
              "title": "Rashmirathi",
              "author": "Ramdhari Singh Dinkar",
              "description": "A poetic tale of Karna of Mahabharat. The seven chapter gives a glimpse of the life and harship of one of the greatest warrior of his time",
              "isbn": "10588193",
              "price": 450,
              "pages":110,
              "votes":4500,              
              "releaseDate": '01/05/1953',
              "rating": 4.5,
              "cover":"",
              "tags": "classic, poetry, mahabharata, karna, hindi".split(',')
            },
          ];
        
    }

    addBook(book: Book): boolean {
        if(book && book.isbn && book.title && book.author){
            this.books.push(book);
            return true;
        } else{
            return false;
        }
    }
    
    getBooks(): Book[] {
        return this.books;
    }
    
    getBook(isbn: string): Book {
        return this.books.find(b=>b.isbn==isbn);
    }

}
