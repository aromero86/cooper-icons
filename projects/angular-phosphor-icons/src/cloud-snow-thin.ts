import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cloud-snow-thin]',
  standalone: true,
})
export class UiIconCloudSnowThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="76" cy="196" r="8"/><circle cx="116" cy="212" r="8"/><circle cx="164" cy="196" r="8"/><circle cx="68" cy="236" r="8"/><circle cx="156" cy="236" r="8"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}