import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[megaphone-simple-bold]',
  standalone: true,
})
export class UiIconMegaphoneSimpleBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M226.24,145.68A8,8,0,0,0,232,138V102a8,8,0,0,0-5.76-7.68l-176-54A8,8,0,0,0,40,48V192a8,8,0,0,0,10.24,7.68Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M192,156.18V196a8,8,0,0,1-8,8H152a8,8,0,0,1-8-8V69.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}