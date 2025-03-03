import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[paypal-logo-duotone]',
  standalone: true,
})
export class UiIconPaypalLogoDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,80H120a8,8,0,0,0-7.76,6.06l-12,48A8,8,0,0,1,108,128h36a48,48,0,0,0,46.56-36.36h0a49,49,0,0,0,1.37-8.94A48.25,48.25,0,0,0,176,80Z" opacity="0.2"/><path d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}