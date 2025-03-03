import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[handshake-duotone]',
  standalone: true,
})
export class UiIconHandshakeDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M99.72,128.71a8,8,0,0,1-1.38-12.42L144,72h39.6l-.28-1.37L128,56,72.68,70.63,40,136l56,40,64,16,40-40-40-32C141,139.13,117.23,139.9,99.72,128.71Z" opacity="0.2"/><polyline points="200 152 160 192 96 176 40 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="72.68 70.63 128 56 183.32 70.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M34.37,60.42,8.85,111.48a8,8,0,0,0,3.57,10.73L40,136,72.68,70.63,45.11,56.85A8,8,0,0,0,34.37,60.42Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,136l27.58-13.79a8,8,0,0,0,3.57-10.73L221.63,60.42a8,8,0,0,0-10.74-3.57L183.32,70.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,72H144L98.34,116.29a8,8,0,0,0,1.38,12.42C117.23,139.9,141,139.13,160,120l40,32,16-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="124.06 216 82.34 205.57 56 186.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}