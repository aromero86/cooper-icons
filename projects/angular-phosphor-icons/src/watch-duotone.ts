import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[watch-duotone]',
  standalone: true,
})
export class UiIconWatchDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="72" opacity="0.2"/><circle cx="128" cy="128" r="72" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/><path d="M88,68.13l6.81-37.56A8,8,0,0,1,102.68,24h50.64a8,8,0,0,1,7.87,6.57L168,68.13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M88,187.87l6.81,37.56a8,8,0,0,0,7.87,6.57h50.64a8,8,0,0,0,7.87-6.57L168,187.87" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="128 88 128 128 168 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}