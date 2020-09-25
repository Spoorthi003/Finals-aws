import { Component, OnInit } from '@angular/core';
import { Book } from '../service/book';
import { SimpleBookService } from '../service/simple-book-service';

@Component({
  selector: 'app-book-composite',
  templateUrl: './book-composite.component.html',
  styleUrls: ['./book-composite.component.css']
})
export class BookCompositeComponent implements OnInit {

  //private bookService=new SimpleBookService();
  public books:Book[];
  public selectedBook:Book;  //selected book will be used for details view

  constructor(
    private bookService:SimpleBookService
  ) { }

  ngOnInit(): void {

    this.books=this.bookService.getBooks();
    
    this.selectedBook=this.books[0];
  }

  selectBook(book:Book){
    this.selectedBook=book;
  }

}
