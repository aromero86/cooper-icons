import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[ear-duotone]',
  standalone: true,
})
export class UiIconEarDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0C208,144,193.56,176,160,216Z" opacity="0.2"/><path d="M160,216c-8.07,9.77-18.34,16-32,16a44,44,0,0,1-44-44c0-41.49-36-28-36-84a80,80,0,0,1,160,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M173.86,168A16,16,0,0,1,144,160c0-24,24-32,24-56a40,40,0,0,0-80,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}