import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[link-duotone]',
  standalone: true,
})
export class UiIconLinkDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M218.34,53.66h0a46.62,46.62,0,0,0-65.94,0L117.66,88.4c-.33.33-.64.66-1,1A46.6,46.6,0,0,0,72.4,101.66L37.66,136.4a46.63,46.63,0,0,0-.06,65.89h0a46.63,46.63,0,0,0,66,.05l34.74-34.74c.33-.33.64-.66.95-1a46.58,46.58,0,0,0,44.31-12.26l34.74-34.74A46.62,46.62,0,0,0,218.34,53.66Z" opacity="0.2"/><path d="M141.38,64.68l11-11a46.62,46.62,0,0,1,65.94,0h0a46.62,46.62,0,0,1,0,65.94L193.94,144,183.6,154.34a46.63,46.63,0,0,1-66-.05h0A46.48,46.48,0,0,1,104,120.06" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M114.62,191.32l-11,11a46.63,46.63,0,0,1-66-.05h0a46.63,46.63,0,0,1,.06-65.89L72.4,101.66a46.62,46.62,0,0,1,65.94,0h0A46.45,46.45,0,0,1,152,135.94" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}