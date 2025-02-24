import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[escalator-down-duotone]',
  standalone: true,
})
export class UiIconEscalatorDownDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z" opacity="0.2"/><polyline points="176 80 200 104 224 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="200" y1="48" x2="200" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,48H88l96,104h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8H168L72,104H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}