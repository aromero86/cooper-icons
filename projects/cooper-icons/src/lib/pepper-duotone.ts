import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pepper-duotone]',
  standalone: true,
})
export class UiIconPepperDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,104l32-16,32,16,22.83-11.42a56,56,0,0,0-109.66,0Z" opacity="0.2"/><path d="M216,104a56,56,0,0,0-112,0c0,48.1-25.64,84-82.27,100.7-8.11,2.39-7.43,14.11.9,15.58C88,231.84,216,222.48,216,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="105.17 92.58 128 104 160 88 192 104 214.84 92.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,16a32,32,0,0,1,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}