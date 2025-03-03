import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[eraser-bold]',
  standalone: true,
})
export class UiIconEraserBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96" y1="104" x2="160" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M112,216,219.31,108.69a16,16,0,0,0,0-22.63L177.94,44.69a16,16,0,0,0-22.63,0L36.69,163.31a16,16,0,0,0,0,22.63L66.75,216H216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}