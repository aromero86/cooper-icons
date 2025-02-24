import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[gavel-thin]',
  standalone: true,
})
export class UiIconGavelThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="50.75" y="44.69" width="106.51" height="38.63" rx="8" transform="translate(-14.79 92.28) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="138.75" y="132.69" width="106.51" height="38.63" rx="8" transform="translate(-51.24 180.28) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="145.66" y1="49.66" x2="206.34" y2="110.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="89.66" y1="105.66" x2="150.34" y2="166.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M132,148,61,219a17,17,0,0,1-24,0h0a17,17,0,0,1,0-24l71-71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}