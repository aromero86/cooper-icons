import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[test-tube]',
  standalone: true,
})
export class UiIconTestTube {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M94.77,213.23a36.77,36.77,0,0,1-52,0h0a36.77,36.77,0,0,1,0-52L172,32l60,60-24,8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72.82,131.18c9.37-3.65,25.78-6.36,47.18,4.82s37.81,8.47,47.18,4.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}