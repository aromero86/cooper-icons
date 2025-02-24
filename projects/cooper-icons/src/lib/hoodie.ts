import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hoodie]',
  standalone: true,
})
export class UiIconHoodie {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,184v24a8,8,0,0,0,8,8h26.57a8,8,0,0,0,7.71-5.9l21.44-78.59a8,8,0,0,0-1.06-6.54L176.38,43.56A8,8,0,0,0,169.73,40H86.27a8,8,0,0,0-6.65,3.56L25.34,125a8,8,0,0,0-1.06,6.54L45.72,210.1a8,8,0,0,0,7.71,5.9H80a8,8,0,0,0,8-8V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,88l56-33V176a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V55Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="144" y1="78.57" x2="144" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="78.57" x2="112" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}