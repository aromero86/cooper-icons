import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chart-pie-fill]',
  standalone: true,
})
export class UiIconChartPieFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88,88,0,0,1,71.87,37.27L128,118.76Zm0,176a88,88,0,0,1-71.87-37.27L207.89,91.12A88,88,0,0,1,128,216Z"/></svg>`;
    }
}