import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[sketch-logo-thin]',
  standalone: true,
})
export class UiIconSketchLogoThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="72 40 184 40 240 104 128 224 16 104 72 40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><polygon points="176 104 128 224 80 104 128 40 176 104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="16" y1="104" x2="240" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}