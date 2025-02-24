import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[webhooks-logo-thin]',
  standalone: true,
})
export class UiIconWebhooksLogoThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="192" cy="168" r="12"/><circle cx="128" cy="64" r="12"/><circle cx="64" cy="168" r="12"/><path d="M32,144a40,40,0,1,0,72,24h88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M164.66,48A40,40,0,1,0,107,98.07L64,168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M192,208a40,40,0,1,0-21-74.07L128,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}