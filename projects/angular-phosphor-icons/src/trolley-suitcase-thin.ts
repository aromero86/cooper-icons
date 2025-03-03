import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[trolley-suitcase-thin]',
  standalone: true,
})
export class UiIconTrolleySuitcaseThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="80" y="64" width="144" height="88" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,64V40a8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="72" cy="224" r="12"/><circle cx="216" cy="224" r="12"/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="32" y1="184" x2="240" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}