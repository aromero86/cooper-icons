import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tea-bag]',
  standalone: true,
})
export class UiIconTeaBag {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}