import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[calculator-light]',
  standalone: true,
})
export class UiIconCalculatorLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="80" y="64" width="96" height="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="32" y="48" width="192" height="160" rx="8" transform="translate(256) rotate(90)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="88" cy="148" r="10"/><circle cx="128" cy="148" r="10"/><circle cx="168" cy="148" r="10"/><circle cx="88" cy="188" r="10"/><circle cx="128" cy="188" r="10"/><circle cx="168" cy="188" r="10"/></svg>`;
    }
}