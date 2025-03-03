import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[airplane-landing]',
  standalone: true,
})
export class UiIconAirplaneLanding {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="104" y1="216" x2="248" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M60,75.46,104,88V48a8,8,0,0,1,10.53-7.59L120,42.24l24,57.2,64.56,18A32,32,0,0,1,232,148.32V184L55.37,134.54A32,32,0,0,1,32,103.73V48a8,8,0,0,1,10.53-7.59L48,42.24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}