import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrow-fat-line-left-fill]',
  standalone: true,
})
export class UiIconArrowFatLineLeftFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M114.34,229.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h56a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-13.66,5.66ZM216,184a8,8,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8,8,0,0,0,216,184Z"/></svg>`;
    }
}