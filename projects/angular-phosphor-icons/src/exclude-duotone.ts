import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[exclude-duotone]',
  standalone: true,
})
export class UiIconExcludeDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,160a72,72,0,0,1,72-72,73.37,73.37,0,0,1,7.6.4,72,72,0,1,0-79.2,79.2A73.37,73.37,0,0,1,88,160Z" opacity="0.2"/><path d="M167.6,88.4A73.37,73.37,0,0,1,168,96a72,72,0,0,1-72,72,73.37,73.37,0,0,1-7.6-.4,72,72,0,1,0,79.2-79.2Z" opacity="0.2"/><circle cx="96" cy="96" r="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="160" cy="160" r="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}