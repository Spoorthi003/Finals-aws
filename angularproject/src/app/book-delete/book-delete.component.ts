import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router'; 
 
@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
  
})
export class BookDeleteComponent implements OnInit {
 
  constructor(private activatedRoute : ActivatedRoute , 
    private router:Router) { }
 
  ngOnInit(): void {
      
  }
  goBack(){
    this.router.navigateByUrl('/book/list');
  }
 
 
}