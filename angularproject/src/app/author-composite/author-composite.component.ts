import { Component, OnInit } from '@angular/core';
import { Author } from '../service/author';
import { SimpleAuthorService } from '../service/simple-author-service';

@Component({
  selector: 'app-author-composite',
  templateUrl: './author-composite.component.html',
  styleUrls: ['./author-composite.component.css']
})
export class AuthorCompositeComponent implements OnInit {

  //private bookService=new SimpleBookService();
  public author:Author[];
  public selectedAuthor:Author;  //selected book will be used for details view

  constructor(
    private authorService:SimpleAuthorService
  ) { }

  ngOnInit(): void {

    this.authorService. getAuthors().subscribe(author =>
       
      {
        this.author=author;
        this.selectedAuthor=this.author[0];}
  );
    
    
  }

  selectAuthor(author:Author){
    this.selectedAuthor=author;
  }

}
