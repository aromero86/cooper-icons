import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[ny-times-logo-duotone]',
  standalone: true,
})
export class UiIconNyTimesLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224a79.75,79.75,0,0,1-32-6.66V129.07L128,112Z" opacity="0.2"/><circle cx="172" cy="148" r="12"/><line x1="96" y1="129.07" x2="96" y2="217.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="48.66 154.31 128 112 128 224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M204.34,168A80,80,0,1,1,120.23,64.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64.19,95.74A28,28,0,0,1,68,40L188,96a28,28,0,0,0,0-56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}