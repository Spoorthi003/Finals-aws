import { Component, OnInit } from '@angular/core';
import { Author } from '../service/author';
import {ActivatedRoute, Router} from '@angular/router'; 
import { SimpleAuthorService } from '../service/simple-author-service';
 
@Component({
  selector: 'app-author-details',
  templateUrl: './author-details.component.html',
})
export class AuthorDetailsComponent implements OnInit {
 
  public selectedAuthor: Author;
 
  constructor(
 
    private activatedRoute : ActivatedRoute , 
    private router:Router,
    private authorService:SimpleAuthorService
 
  ) { 
    this.selectedAuthor={};
  }
 
  ngOnInit(): void {
   
    let authorId= this.activatedRoute.snapshot.params.authorId;
    console.log(authorId);
 
    this.authorService.getAuthor(authorId).subscribe(author =>
    {
 
    if(author)
      this.selectedAuthor=author;
    else    
      this.router.navigateByUrl(`/404?error=No Such Author&id=${authorId}`);
    });
  }
 
  goBack(){
    this.router.navigateByUrl('/author/list');
  }
  deleteAuthor() {
    if (confirm("Do you want to delete author : "+ this.selectedAuthor.id)) {        
      this.authorService.deleteAuthor(this.selectedAuthor.id).subscribe(data => {          
        this.router.navigateByUrl('/author/list' );
      });
 
}
  }
  editAuthor()
  {
    this.router.navigateByUrl('/author/edit/' + this.selectedAuthor.id);
  }
}
