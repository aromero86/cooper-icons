import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[crown-cross-bold]',
  standalone: true,
})
export class UiIconCrownCrossBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="176" x2="128" y2="12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="104" y1="32" x2="152" y2="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,120A52,52,0,0,1,76,68c28.72,0,52,19.28,52,48,0-28.72,23.28-48,52-48a52,52,0,0,1,52,52c0,52-48,64-48,64v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V184S24,172,24,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}