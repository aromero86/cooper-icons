import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cookie-thin]',
  standalone: true,
})
export class UiIconCookieThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="156" cy="172" r="8"/><circle cx="92" cy="164" r="8"/><circle cx="84" cy="108" r="8"/><circle cx="132" cy="124" r="8"/><path d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}