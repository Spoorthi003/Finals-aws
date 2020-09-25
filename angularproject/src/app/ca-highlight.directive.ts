import { Directive, OnInit, ElementRef,Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[ca-highlight]'
})
export class CaHighlightDirective implements OnInit{

  //any value applied ca-highlight attribute will be pulled in here
  @Input('ca-highlight') private backgroundColor='Yellow';
  @Input('hightlight-text-color') private textColor;
  @Input('highlight-class') private highlightClass;

  constructor(
    private target: ElementRef, //the element on which this directive is applied
    private renderer: Renderer2

  ) { 

    
  }
  
  
  
  ngOnInit(): void {
    this.backgroundColor=this.backgroundColor||'lightyellow';
    
    
    if(this.highlightClass){
      this.renderer.setAttribute(this.target.nativeElement, 'class',this.highlightClass);
    } else{
    
      
          this.renderer.setStyle(this.target.nativeElement, 'background',this.backgroundColor);

          if(this.textColor)
                this.renderer.setStyle(this.target.nativeElement, 'color', this.textColor);
    }

  }

}
