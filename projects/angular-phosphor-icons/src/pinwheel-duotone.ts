import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pinwheel-duotone]',
  standalone: true,
})
export class UiIconPinwheelDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M27.15,145.32a52,52,0,0,1,97.73-35.57Z" opacity="0.2"/><path d="M212.85,94.68a52,52,0,1,1-97.73,35.57Z" opacity="0.2"/><path d="M94.68,27.15a52,52,0,0,1,35.57,97.73Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M27.15,145.32a52,52,0,0,1,97.73-35.57Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M145.32,212.85a52,52,0,1,1-35.57-97.73Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M212.85,94.68a52,52,0,1,1-97.73,35.57Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="164.48" y1="164.48" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}