import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[align-bottom-fill]',
  standalone: true,
})
export class UiIconAlignBottomFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216Zm-72-24h40a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H152a16,16,0,0,0-16,16v96A16,16,0,0,0,152,192Zm-88,0h40a16,16,0,0,0,16-16V40a16,16,0,0,0-16-16H64A16,16,0,0,0,48,40V176A16,16,0,0,0,64,192Z"/></svg>`;
    }
}