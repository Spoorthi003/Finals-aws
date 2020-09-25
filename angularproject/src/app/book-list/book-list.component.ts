import { Component, OnInit } from '@angular/core';
import {Book} from '../service/book'; 
import { RangeInfo } from '../ca-range/ca-range.component';
import {SimpleBookService} from '../service/simple-book-service'; 



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  public showImages=true;
  public books: Book[];
  public imageWidth=120;
  //public bookService=new SimpleBookService();


  constructor(
    private bookService: SimpleBookService
  ) { 


  }

  ngOnInit(): void {
    this.books=this.bookService.getBooks(); //components gets the book from the service 
  }

  toggleImages(){

    this.showImages=!this.showImages;
  }

 


 
  
  
  onImageWidthInfoChanged(r: RangeInfo){

    //console.log(r);
    
  }
  

}
