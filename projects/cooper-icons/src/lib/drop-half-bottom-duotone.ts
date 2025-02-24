import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[drop-half-bottom-duotone]',
  standalone: true,
})
export class UiIconDropHalfBottomDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M49.3,128A100.8,100.8,0,0,0,48,144a80,80,0,0,0,160,0,100.8,100.8,0,0,0-1.3-16Z" opacity="0.2"/><path d="M208,144c0-72-80-128-80-128S48,72,48,144a80,80,0,0,0,160,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="49.3" y1="128" x2="206.7" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}