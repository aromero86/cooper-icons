import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[instagram-logo-thin]',
  standalone: true,
})
export class UiIconInstagramLogoThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="32" y="32" width="192" height="192" rx="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="180" cy="76" r="8"/></svg>`;
    }
}