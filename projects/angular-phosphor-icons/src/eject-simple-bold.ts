import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[eject-simple-bold]',
  standalone: true,
})
export class UiIconEjectSimpleBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="224" y1="200" x2="32" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}