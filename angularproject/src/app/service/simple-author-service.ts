import {Author} from './author';  
import {AuthorService} from './author-service'; 
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class SimpleAuthorService implements AuthorService{
   
  constructor(private http: HttpClient) {
    this.serviceId=++SimpleAuthorService.serviceCount;
    console.log(`SimpleAuthorService created with id ${this.serviceId}`);
 }

    private authors:Author[];
    static serviceCount=0;
    private serviceId;
    public update = new Subject<Author[]>();
    Author;
    
    
    addAuthor(authors: Author): Observable<any> {
        if(authors && authors.id && authors.name){
         return this.http
          .post<{ message: string; result: Author[] }>(
            'http://localhost:3000/api/authors/',
            authors
          )
        
        } 
    }
    
    getAuthors(): Observable<any>{
      return this.http
      .get<{ message: string; result: Author[] }>(
        'http://localhost:3000/api/authors/'
      )
    }
    
    getAuthor(id: string): Observable<any> {
      return this.http
      .get<{ message: string; result: Author[] }>(
        'http://localhost:3000/api/authors/' + id
      )
    }
    deleteAuthor(id: string):Observable<any> {
      const newList = [];
      return  this.http
        .delete('http://localhost:3000/api/authors/' + id)
    }
    updateAuthor(id:string,authors: Author): Observable<any> {
      
       return this.http
        .put(
          'http://localhost:3000/api/authors/' + id ,authors
        )
      

  }
  
  
}
