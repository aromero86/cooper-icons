import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cloud-snow-duotone]',
  standalone: true,
})
export class UiIconCloudSnowDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M156,24A68.16,68.16,0,0,0,90.19,74.45v-.11A44,44,0,1,0,76,160h80a68,68,0,0,0,0-136Z" opacity="0.2"/><circle cx="76" cy="196" r="12"/><circle cx="116" cy="212" r="12"/><circle cx="164" cy="196" r="12"/><circle cx="68" cy="236" r="12"/><circle cx="156" cy="236" r="12"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}