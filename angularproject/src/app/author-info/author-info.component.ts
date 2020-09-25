import { Component, OnInit, Input } from '@angular/core';
import { Author } from '../service/author';
 
@Component({
  selector: 'app-author-info',
  templateUrl: './author-info.component.html',
  
})
export class AuthorInfoComponent implements OnInit {
 
  @Input() public author:Author;
 
  constructor() { }
 
  ngOnInit(): void {
  }
 
}