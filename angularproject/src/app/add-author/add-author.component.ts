import { Component, OnInit } from '@angular/core';
import { Author } from '../service/author';
import { SimpleAuthorService } from '../service/simple-author-service';
import { Router } from '@angular/router';


 
@Component({
  selector: 'app-add-author',
  templateUrl: './add-author.component.html',
  styleUrls: ['./add-author.component.css']
})
export class AddAuthorComponent implements OnInit {
 
  public author:Author;
 
  constructor(
    private authorService:SimpleAuthorService,
    private router:Router
  )
 
  {}
 
  ngOnInit(): void {
 
    this.author=this.createAuthor();
  }
 
  createAuthor():Author{
    return {
      name:'',
      biography:'',
      photoUrl:'',
      email:'',
    };
  }
  public errors=[];
  
  onAddAuthor(){
    this.errors=[];
 
    if(!this.author.name)
      this.errors.push('Author name is missing');
 
    if(!this.author.biography)
      this.errors.push('Biography is missing');
 
    if(!this.author.email)
      this.errors.push('email is missing');
 
    if(this.errors.length>0)
      console.log('invalid input');
    else{
      this.authorService.addAuthor(this.author).subscribe((output) => {
        console.log(output);
        this.router.navigateByUrl('/author/list');
       
      });     
     
    }
 
  }
 
}