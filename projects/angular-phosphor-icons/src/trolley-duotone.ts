import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[trolley-duotone]',
  standalone: true,
})
export class UiIconTrolleyDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,72H224a16,16,0,0,1,16,16v96a0,0,0,0,1,0,0H48a0,0,0,0,1,0,0V72A0,0,0,0,1,48,72Z" opacity="0.2"/><circle cx="72" cy="224" r="16"/><circle cx="216" cy="224" r="16"/><path d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="32" y1="184" x2="240" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}