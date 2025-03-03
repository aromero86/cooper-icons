import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pizza-bold]',
  standalone: true,
})
export class UiIconPizzaBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M25.16,70.9a8,8,0,0,1,2.7-11,193.49,193.49,0,0,1,200.28,0,8,8,0,0,1,2.7,11l-96,157.26a8,8,0,0,1-13.7,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M42.07,98.6a152.1,152.1,0,0,1,171.86,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M160,187a32,32,0,1,1,31.91-52.28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M47.47,107.45a32,32,0,1,1,31.6,51.77" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}