import { Component, OnInit } from '@angular/core';
import { RangeInfo } from '../ca-range/ca-range.component';
import {SimpleAuthorService} from '../service/simple-author-service'; 
import { Author } from '../service/author';
 
@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
 
  public authors: Author[];
  public showImages=true;
  public imageWidth=120;

  constructor(
    private authorService: SimpleAuthorService
 
  ) { 
    this.authors=[];
  }
 
  ngOnInit(): void {
   this.authorService.getAuthors().subscribe((output) => {
    console.log(output);
    this.authors = output;
   
    });
  }
  toggleImages(){

    this.showImages=!this.showImages;
  }

 
  onImageWidthInfoChanged(r: RangeInfo){

    //console.log(r);
    
  }
}