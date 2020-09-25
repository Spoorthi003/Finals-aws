import { Component, OnInit, Input } from '@angular/core';
import { Book } from '../service/book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {

  @Input() public book:Book;

  
  constructor() { 

    

  }

  ngOnInit(): void {
  }

}
