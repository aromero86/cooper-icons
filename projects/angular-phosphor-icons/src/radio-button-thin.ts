import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[radio-button-thin]',
  standalone: true,
})
export class UiIconRadioButtonThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="128" r="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}