import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[truck-trailer-duotone]',
  standalone: true,
})
export class UiIconTruckTrailerDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M120,72H16a8,8,0,0,0-8,8V184a24,24,0,0,1,48,0,24,24,0,0,1,48,0h16Z" opacity="0.2"/><path d="M216,104h0V96a48,48,0,0,0-48-48h-8a8,8,0,0,0-8,8V184h48a24,24,0,0,1,48,0V136A32,32,0,0,0,216,104Z" opacity="0.2"/><circle cx="224" cy="184" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="32" cy="184" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="80" cy="184" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="184" x2="104" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M152,184V56a8,8,0,0,1,8-8h8a48,48,0,0,1,48,48v8h0a32,32,0,0,1,32,32v48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M120,184V72H16a8,8,0,0,0-8,8V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}