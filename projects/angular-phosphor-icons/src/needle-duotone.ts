import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[needle-duotone]',
  standalone: true,
})
export class UiIconNeedleDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M182.63,118.63l24-24a32,32,0,0,0-45.26-45.26l-24,24C128,128,40,216,40,216S128,128,182.63,118.63Z" opacity="0.2"/><line x1="184" y1="72" x2="168" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M182.63,118.63l24-24a32,32,0,0,0-45.26-45.26l-24,24C128,128,40,216,40,216S128,128,182.63,118.63Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}