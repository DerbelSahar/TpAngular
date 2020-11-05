import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() in = 'green';
  @Input() out = 'blue';
  @HostBinding('style.backgroundColor') bgc = 'pink'
  constructor() { }
  @HostListener('mouseenter') onMouseEnter(){
    this.bgc = this.in;
    }
    @HostListener('mouseleave') onMouseLeave(){
      this.bgc = this.out;
      }
}
