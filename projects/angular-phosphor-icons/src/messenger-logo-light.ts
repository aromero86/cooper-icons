import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[messenger-logo-light]',
  standalone: true,
})
export class UiIconMessengerLogoLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="80 144 112 112 144 144 176 112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M79.93,211.11a96,96,0,1,0-35-35h0L32.42,213.46a8,8,0,0,0,10.12,10.12l37.39-12.47Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}