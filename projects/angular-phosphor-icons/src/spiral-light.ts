import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[spiral-light]',
  standalone: true,
})
export class UiIconSpiralLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M136,136a8,8,0,0,1,8,8,16,16,0,0,1-16,16,24,24,0,0,1-24-24,32,32,0,0,1,32-32,40,40,0,0,1,40,40,48,48,0,0,1-48,48,56,56,0,0,1-56-56,64,64,0,0,1,64-64,72,72,0,0,1,72,72,80,80,0,0,1-80,80,88,88,0,0,1-88-88,96,96,0,0,1,96-96A104,104,0,0,1,240,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}