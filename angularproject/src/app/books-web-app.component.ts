import { Component } from "@angular/core";


@Component({
    selector: 'app-booksweb',  //custom html element or component identifier
    template:
    `
    <app-booksweb-header></app-booksweb-header>
    <div class='content container' >

        <router-outlet></router-outlet>
        
        
    </div>
    <app-booksweb-footer></app-booksweb-footer>
    `,
    styles:[
        `
        .content{
            padding-bottom:50px;
        }
        `
    ]
})
export class BooksWebAppComponent{
    
}