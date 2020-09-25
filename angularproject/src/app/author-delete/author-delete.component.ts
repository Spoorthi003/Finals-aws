
import { Component, OnInit } from'@angular/core';
import {ActivatedRoute, Router} from '@angular/router'; 
 
@Component({
selector:'app-author-delete',
templateUrl:'./author-delete.component.html',
styleUrls: ['./author-delete.component.css']

})
export class AuthorDeleteComponent implements OnInit {
 
constructor(private activatedRoute : ActivatedRoute , 
    private router:Router) { }
 
ngOnInit(): void {
  }
  goBack(){
    this.router.navigateByUrl('/author/list');
  }
 
}

