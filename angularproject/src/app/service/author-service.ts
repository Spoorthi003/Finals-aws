import {Author} from './author'; 

export interface AuthorService{
   
    addAuthor(authors: Author); 
    getAuthors();   
    getAuthor(id: string);
    deleteAuthor(id:string);
    updateAuthor(id:string,authors:Author);
    

}