import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[beer-stein-bold]',
  standalone: true,
})
export class UiIconBeerSteinBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,80H192a0,0,0,0,1,0,0V208a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V80A0,0,0,0,1,48,80Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M192,96h24a16,16,0,0,1,16,16v64a16,16,0,0,1-16,16H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="96" y1="120" x2="96" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="144" y1="120" x2="144" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M192,80V72a32,32,0,0,0-32-32H145.74C135.49,30.18,120.59,24,104,24,73.07,24,48,45.49,48,72v8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}