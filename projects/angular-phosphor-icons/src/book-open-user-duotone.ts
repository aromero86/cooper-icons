import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[book-open-user-duotone]',
  standalone: true,
})
export class UiIconBookOpenUserDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,80a32,32,0,0,0-32,32A32,32,0,0,0,96,80H24V200H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32h72V80Z" opacity="0.3"/><path d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,48a40,40,0,0,1,64,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}