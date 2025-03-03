import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[brackets-curly-duotone]',
  standalone: true,
})
export class UiIconBracketsCurlyDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,216c64,0,0-88,64-88-64,0,0-88-64-88H80c-64,0,0,88-64,88,64,0,0,88,64,88Z" opacity="0.2"/><path d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}