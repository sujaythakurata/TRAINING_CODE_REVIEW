import { Directive, HostListener, TemplateRef, ElementRef} from '@angular/core';

@Directive({
  selector: '[appShowPassword]'
})
export class ShowPasswordDirective {

  constructor(private element:ElementRef) { }
  @HostListener('click')displayPwd(){
    console.log(this.element.nativeElement, this.element);
  }

}
