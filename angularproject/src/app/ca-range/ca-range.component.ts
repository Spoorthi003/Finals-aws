import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ca-range',
  template: `
    <div class='row'>
      <button class='col-md-4 col-sm-4' 
        [disabled]='this.value<=this.min'
        (click)='decrease()' >
        <i class="fa fa-arrow-circle-down"></i>
      </button>
      <span class='col-md-4 col-sm-4'>{{value}}</span>
      <button class='col-md-4 col-sm-4' 
      [disabled]='this.value>=this.max'
      (click)='increase()' >
      <i class="fa fa-arrow-circle-up"></i>
      </button>
    </div>
  `,
  styles: [
    `
    *{
      margin-left:0px;
      margin-right:0px;
    }
    div{
      min-width:100px;
      width:100px;
      max-width:150px;
    }
    button{
      border:0px;
      background:transparent;
    }
    `
  ]
})
export class CaRangeComponent implements OnInit {

  //Here we receive input from parent in the child. Typically using attribute assignment
  
  
  
  @Input() public min:number=0;
  @Input() public max=100;
  @Input() public delta=1;

  @Input() public value=5;
  
  //Here the child send information to parent using EventEmitter

  @Output() public valueChange=new EventEmitter<number>(); //note the name matches @Input() value

  @Output() public changed= new EventEmitter<RangeInfo>(); //i will send the range info to the client
  @Output() public hit=new EventEmitter<string>();  //it is fired when you hit lower boundry
  

  change(newValue){
    if(newValue<=this.min){
      this.hit.emit('lower');
      newValue=this.min;

    }
    if(newValue>=this.max){
      this.hit.emit('upper');
      newValue=this.max;
    }
    //this will send an update to the parent

    //provides you a detailed change information
    this.changed.emit(new RangeInfo(this.value,newValue, newValue-this.value));

    //this one provides exactly what you need to know
    this.valueChange.emit(newValue);
    this.value=newValue;

  }

  constructor() { }

  ngOnInit(): void {
    this.change(this.value);
  
    
  }

  decrease(){
    this.change(this.value-this.delta);
  }
  increase(){
    this.change(this.value+this.delta);
  }
 

}

export class RangeInfo{
  public oldValue;
  public newValue;
  public delta;
  constructor(oldValue, newValue, delta){
    this.oldValue=oldValue;
    this.newValue=newValue;
    this.delta=delta;
  }

}