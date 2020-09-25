import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClassStmt } from '@angular/compiler';

@Component({
  selector: 'app-ca-not-found',
  templateUrl: './ca-not-found.component.html',
  styleUrls: ['./ca-not-found.component.css']
})
export class CaNotFoundComponent implements OnInit {
  public errorMessage:string;
  public id:string;
  public errorDetails:string;

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.errorMessage= this.route.snapshot.queryParams.error || 'Page Not Found';
    let url= this.route.snapshot.url.join('/');    
    this.id=this.route.snapshot.queryParams.id || null;
    this.errorDetails= this.id ? `Invalid Id ${this.id}` : `Invalid Url: ${url}`;

      
  }

}
