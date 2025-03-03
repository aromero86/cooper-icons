import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[shield-chevron-duotone]',
  standalone: true,
})
export class UiIconShieldChevronDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M202,171.78,128,120,54,171.78C78.87,218.6,128,232,128,232S177.13,218.6,202,171.78Z" opacity="0.2"/><path d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="201.97 171.78 128 120 54.03 171.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}