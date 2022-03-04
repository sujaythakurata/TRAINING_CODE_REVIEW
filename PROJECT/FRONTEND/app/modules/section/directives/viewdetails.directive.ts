import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appViewdetails]'
})
export class ViewdetailsDirective {

  constructor(private element:ElementRef, private render:Renderer2) { }
  @HostListener('mouseenter')
  showViewDetails(){
    let view = this.element.nativeElement.querySelector('.view-details');
    this.render.setStyle(view, 'display', 'block');
  }
  @HostListener('mouseleave')
  hideViewDetails(){
    let view = this.element.nativeElement.querySelector('.view-details');
    this.render.setStyle(view, 'display', 'none');
  }
}
