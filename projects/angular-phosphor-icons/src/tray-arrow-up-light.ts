import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tray-arrow-up-light]',
  standalone: true,
})
export class UiIconTrayArrowUpLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="128" y1="72" x2="128" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M40,160H76.69a8,8,0,0,1,5.65,2.34l19.32,19.32a8,8,0,0,0,5.65,2.34h41.38a8,8,0,0,0,5.65-2.34l19.32-19.32a8,8,0,0,1,5.65-2.34H216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="96 104 128 72 160 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}