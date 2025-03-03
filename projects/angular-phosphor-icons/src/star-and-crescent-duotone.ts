import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[star-and-crescent-duotone]',
  standalone: true,
})
export class UiIconStarAndCrescentDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" opacity="0.2"/><polygon points="177.46 128 160 98.33 192.59 106.4 214.39 80 217.06 114.65 248 128 217.06 141.35 214.39 176 192.59 149.6 160 157.67 177.46 128" opacity="0.2"/><path d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polygon points="177.46 128 160 98.33 192.59 106.4 214.39 80 217.06 114.65 248 128 217.06 141.35 214.39 176 192.59 149.6 160 157.67 177.46 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}