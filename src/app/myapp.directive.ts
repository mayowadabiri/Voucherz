import { Directive, HostListener, HostBinding } from '@angular/core';
// import { enterView } from '@angular/core/src/render3/state';


@Directive({
  selector: '[appMyapp]'
})
export class MyappDirective {
  @HostBinding("style.color") myColor: string = "red"
  
  constructor() { }
  @HostListener("mouseenter") enterView(){
      this.myColor = "grey"
  }

}
