import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[grains-slash-duotone]',
  standalone: true,
})
export class UiIconGrainsSlashDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M172,72.59h0C160.39,40.19,128,24,128,24S95.62,40.19,84.05,72.56v0A79.67,79.67,0,0,0,48,64v56h0a80,80,0,0,1,80,80,80,80,0,0,1,80-80h0V64A79.6,79.6,0,0,0,172,72.59Z" opacity="0.2"/><path d="M128,224h0a80,80,0,0,1-80-80V120h0a80,80,0,0,1,80,80Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,120V64h0a79.89,79.89,0,0,0-64.83,33.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M205.14,165.28A80.3,80.3,0,0,0,208,144V120h0a79.63,79.63,0,0,0-36.18,8.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M146.71,148.58A79.68,79.68,0,0,0,128,200v24h0a79.86,79.86,0,0,0,61.29-28.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,120V64h0a79.92,79.92,0,0,1,25.63,4.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M98.5,48A104.72,104.72,0,0,1,128,24S160.39,40.19,172,72.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}