import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[grains-slash-bold]',
  standalone: true,
})
export class UiIconGrainsSlashBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224h0a80,80,0,0,1-80-80v-8h0a80,80,0,0,1,80,80Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M48,136V64h0a79.92,79.92,0,0,1,25.63,4.19" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M103.94,42.07A103.5,103.5,0,0,1,128,24S160.39,40.19,172,72.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M208,136V64h0a79.79,79.79,0,0,0-59.75,26.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M207.16,155.61A80.84,80.84,0,0,0,208,144v-8h0a80.9,80.9,0,0,0-17,1.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M154.19,156.8A79.81,79.81,0,0,0,128,216v8h0a79.86,79.86,0,0,0,61.29-28.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}