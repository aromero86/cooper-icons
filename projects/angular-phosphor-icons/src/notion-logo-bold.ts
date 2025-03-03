import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[notion-logo-bold]',
  standalone: true,
})
export class UiIconNotionLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="40 48 60 48 148 208 196 208 196 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="40" y1="208" x2="80" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="176" y1="48" x2="216" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="196 208 108 48 60 48 60 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}