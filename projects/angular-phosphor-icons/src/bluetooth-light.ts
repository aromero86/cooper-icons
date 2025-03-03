import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bluetooth-light]',
  standalone: true,
})
export class UiIconBluetoothLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="128 32 192 80 128 128 128 32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="128 128 192 176 128 224 128 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="64" y1="80" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="64" y1="176" x2="128" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}