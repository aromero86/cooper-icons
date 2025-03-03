import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[intersect-bold]',
  standalone: true,
})
export class UiIconIntersectBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="96" cy="96" r="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="160" cy="160" r="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="109.09" y1="109.09" x2="146.91" y2="146.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}