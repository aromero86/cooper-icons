import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[ticket]',
  standalone: true,
})
export class UiIconTicket {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96" y1="56" x2="96" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M24,160a32,32,0,0,0,0-64V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V96a32,32,0,0,0,0,64v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}