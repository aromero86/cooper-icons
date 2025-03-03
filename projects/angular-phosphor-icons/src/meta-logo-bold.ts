import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[meta-logo-bold]',
  standalone: true,
})
export class UiIconMetaLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M105.11,155.55C90.66,180.34,75.67,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-10.65,0-20.47,7.61-29.86,19.33" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}