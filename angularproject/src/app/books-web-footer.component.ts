import {Component} from '@angular/core'

@Component({
    selector: 'app-booksweb-footer',
    styles:[
        `        
            .footer {
                position: fixed;
                left: 0;
                bottom: 0;
                width: 100%;
                background-color: purple;
                color: white;
                text-align: center;
                margin-top: 150px;
                
            }
        `
    ],
    template: 
        `
        <div class='footer'>
        &copy; <a href='http://www.conceptarchitect.in'>Concept Architect</a>
        </div>
        
        `
})
export class BooksWebFooterComponent{
}