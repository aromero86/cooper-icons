import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-elbow-left-down-fill]',
  standalone: true,
})
export class UiIconArrowElbowLeftDownFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M240,72a8,8,0,0,1-8,8H96v80h40a8,8,0,0,1,5.66,13.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,40,160H80V72a8,8,0,0,1,8-8H232A8,8,0,0,1,240,72Z"/></svg>`;
    }
}