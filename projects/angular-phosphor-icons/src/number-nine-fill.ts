import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[number-nine-fill]',
  standalone: true,
})
export class UiIconNumberNineFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM166.3,129.62c-.07.13-.12.26-.2.38l-33.48,58a8,8,0,0,1-13.86-8l16.52-28.61A44.79,44.79,0,0,1,128,152a44.05,44.05,0,1,1,38.3-22.38ZM156,108a28,28,0,1,1-28-28A28,28,0,0,1,156,108Z"/></svg>`;
    }
}