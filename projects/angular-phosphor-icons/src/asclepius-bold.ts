import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[asclepius-bold]',
  standalone: true,
})
export class UiIconAsclepiusBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="128" y1="24" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M80,48v8A32,32,0,0,1,48,88H28V80A32,32,0,0,1,60,48H92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M164,48h17a31,31,0,0,1,31,31v1a32,32,0,0,1-32,32H100a24,24,0,0,0-24,24h0a24,24,0,0,0,16,22.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M164,166.11A24,24,0,0,1,172,184h0a24,24,0,0,1-24,24H92" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}