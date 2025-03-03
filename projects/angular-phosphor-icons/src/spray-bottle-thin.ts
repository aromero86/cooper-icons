import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[spray-bottle-thin]',
  standalone: true,
})
export class UiIconSprayBottleThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M72,72H200a48,48,0,0,0-48-48H80a8,8,0,0,0-8,8V80a32,32,0,0,1-32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M160,72h0a263.14,263.14,0,0,1,40,139.47V224a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V167.38a32,32,0,0,1,12-25l16-12.78a32,32,0,0,0,12-25V72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}