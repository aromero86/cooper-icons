import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[avocado-duotone]',
  standalone: true,
})
export class UiIconAvocadoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M203.45,133.33,173.63,49.05a48,48,0,0,0-90.9-1L53.19,131.59a80,80,0,1,0,150.26,1.74ZM128,200a40,40,0,1,1,40-40A40,40,0,0,1,128,200Z" opacity="0.2"/><circle cx="128" cy="160" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M82.73,48a48,48,0,0,1,90.9,1l29.82,84.28a80,80,0,1,1-150.26-1.74Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}