import { Directive, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[ca-rainbow-color]'
})
export class CaRainbowColorDirective implements OnInit {

  private colors:string[];

  constructor(
    private target:ElementRef,
    private renderer: Renderer2

  ) { 

    this.colors=[
      'Violet','Indigo','Blue','Green','Yellow','Orange','Red'
    ];

  }


  setColor(){
    const r=Math.random();
    let index= Math.floor( r* this.colors.length);
    let color=this.colors[index];

    this.renderer.setStyle(this.target.nativeElement, 'color', color);
  }

  ngOnInit(): void {
    this.setColor();
  }

  //this will handle the click even of its parent
  @HostListener('click') onClick(): void {
    this.setColor();
  }

}
