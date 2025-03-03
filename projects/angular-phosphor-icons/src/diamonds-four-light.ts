import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[diamonds-four-light]',
  standalone: true,
})
export class UiIconDiamondsFourLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="99.72" y="35.72" width="56.57" height="56.57" transform="translate(-7.76 109.25) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="99.72" y="163.72" width="56.57" height="56.57" transform="translate(-98.27 146.75) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="163.72" y="99.72" width="56.57" height="56.57" transform="translate(-34.27 173.25) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><rect x="35.72" y="99.72" width="56.57" height="56.57" transform="translate(-71.76 82.75) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}