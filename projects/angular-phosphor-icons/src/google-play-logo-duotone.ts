import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[google-play-logo-duotone]',
  standalone: true,
})
export class UiIconGooglePlayLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,128,58.32,26.32A7.7,7.7,0,0,0,56,31.86V224.14a7.7,7.7,0,0,0,2.32,5.54Z" opacity="0.2"/><path d="M56,224.14a8,8,0,0,0,12.06,6.77L235.9,134.84a7.75,7.75,0,0,0,0-13.68L68.06,25.09A8,8,0,0,0,56,31.86Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="58.33" y1="26.33" x2="192" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="58.33" y1="229.67" x2="191.98" y2="96.02" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}