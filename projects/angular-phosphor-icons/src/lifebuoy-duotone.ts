import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[lifebuoy-duotone]',
  standalone: true,
})
export class UiIconLifebuoyDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M195.88,60.12a96,96,0,0,1,0,135.76l-39.6-39.6a40,40,0,0,0,0-56.56Z" opacity="0.2"/><path d="M60.12,195.88a96,96,0,0,1,0-135.76l39.6,39.6a40,40,0,0,0,0,56.56Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="99.72" y1="99.72" x2="60.12" y2="60.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="156.28" y1="99.72" x2="195.88" y2="60.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="156.28" y1="156.28" x2="195.88" y2="195.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="99.72" y1="156.28" x2="60.12" y2="195.88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}