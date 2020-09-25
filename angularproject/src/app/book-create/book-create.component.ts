import { Component, OnInit } from '@angular/core';
import { Book } from '../service/book';
import { SimpleBookService } from '../service/simple-book-service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {

  public book:Book;
 // private bookService:SimpleBookService=new SimpleBookService();

  constructor(
    private bookService:SimpleBookService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.book=this.createBook();
  }

  createBook():Book{
    return {
      isbn:'',
      title:'',
      author:'',
      description:'',
      price:0,
      pages:0,
      votes:0,
      rating:0,
      seriesIndex:0,
      series:''
    };
  }
  public errors=[];
  onAddBook(){
    this.errors=[];

    if(!this.book.isbn)
      this.errors.push('isbn number missing');

    if(!this.book.title)
      this.errors.push('title is missing');

    if(!this.book.author)
      this.errors.push('author is missing');

    if(this.errors.length>0)
      console.log('invalid input');
    else{
      this.bookService.addBook(this.book);     
      console.log('total books ', this.bookService.getBooks()) ;
      this.router.navigateByUrl('/book/list');
    }

  }

}
