import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[visor-bold]',
  standalone: true,
})
export class UiIconVisorBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="80" y1="104" x2="176" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M180,64a64,64,0,0,1,2.05,128c-14.9.47-28.71-7.19-39.8-15.31a24.13,24.13,0,0,0-28.5,0C102.66,184.79,88.85,192.45,74,192A64,64,0,0,1,76,64Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}