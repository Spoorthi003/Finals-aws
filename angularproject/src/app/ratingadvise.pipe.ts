import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ratingadvise'
})
export class RatingadvisePipe implements PipeTransform {

  transform(value: number, scale:number=5, ...args: unknown[]): unknown {

   let suggestions=[ 
                    "", //index 0 --> not used
                    "Don’t read if you are paid to.", "Expensive at cost 0","Skip it, Go find some better read",
                    "Average. Read if you must!","Average. You may like it", "Good. Read it if you have time",
                    "Good book. You won't be dispapointed", "It’s a Very Good book to read", 
                    "Wonderful Book. Should Read",  
                    "Excellent. Must Read", 
                  ];
    
    let suggestionsCount=suggestions.length-1;
    
    
    //let value=84 --->  84* 10/100 --> 8.4 -->9      1 -->   1* 10/100 -->01. --> 1
    //let value=2.3 ---> 2.3 * 10/5 --> 4.6 --> 5

    let index= Math.ceil(value*(suggestionsCount/scale));
    
    return suggestions[index];
  }

}
