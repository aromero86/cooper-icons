import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[eyedropper-light]',
  standalone: true,
})
export class UiIconEyedropperLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M182.43,113.17l4.88,4.89a16,16,0,0,1,0,22.63l-9,9a8,8,0,0,1-11.31,0L106.34,89a8,8,0,0,1,0-11.31l9-9a16,16,0,0,1,22.63,0l4.89,4.88,25-25.1c10.79-10.79,28.37-11.45,39.44-1a28,28,0,0,1,.57,40.15Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M159.31,141.94l-56.68,56.69a32,32,0,0,1-32.06,8h0l-20,8.74a8,8,0,0,1-8.86-1.67h0a5.74,5.74,0,0,1-1.2-6.36l9.19-21.06h0a32,32,0,0,1,7.7-32.87l56.69-56.68" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}