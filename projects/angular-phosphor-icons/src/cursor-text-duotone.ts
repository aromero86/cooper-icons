import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cursor-text-duotone]',
  standalone: true,
})
export class UiIconCursorTextDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M160,48a32,32,0,0,0-32,32A32,32,0,0,0,96,48H80V208H96a32,32,0,0,0,32-32,32,32,0,0,0,32,32h16V48Z" opacity="0.2"/><path d="M128,80a32,32,0,0,1,32-32h16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,208H160a32,32,0,0,1-32-32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,208H96a32,32,0,0,0,32-32V80A32,32,0,0,0,96,48H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="128" x2="152" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}