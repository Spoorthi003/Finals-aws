


export interface Book {
    
    bookId?:string;

    isbn:string;    
    title: string;
    author: string;
    description: string;
    pages?:number;
    price:number;
    rating:number;
    votes?:number;
    releaseDate?: string|Date
    cover?:string;
    tags?:string[];
    series?:string;
    seriesIndex?:number;

    
  }