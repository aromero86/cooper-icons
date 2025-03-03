import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[face-mask-light]',
  standalone: true,
})
export class UiIconFaceMaskLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,77.09a8,8,0,0,1,5.27-7.52l80-29.09a8,8,0,0,1,5.46,0l80,29.09A8,8,0,0,1,216,77.09V136c0,56-88,72-88,72s-88-16-88-72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="88" y1="104" x2="168" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="88" y1="136" x2="168" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M213.41,152H224a24,24,0,0,0,24-24V104a24,24,0,0,0-24-24h-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M42.59,152H32A24,24,0,0,1,8,128V104A24,24,0,0,1,32,80h8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}