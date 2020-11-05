import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  @HostBinding('style.color') color = 'pink'
  @HostBinding('style.border-color') borderColor = 'pink'
 
  constructor() { }
  random_rgba() {
    var o = Math.round, r = Math.random, s = 255;
    return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
  }
  @HostListener('keydown') onKeyDown(){
    this.color = this.random_rgba();
    this.borderColor = this.random_rgba();
  }
}
