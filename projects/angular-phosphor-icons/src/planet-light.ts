import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[planet-light]',
  standalone: true,
})
export class UiIconPlanetLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M184.76,60.75c27.13-7.21,47.41-6.45,53.44,3.94,11,18.93-29.45,62.61-90.32,97.58s-119.1,48-130.08,29c-6.05-10.43,3.51-28.37,23.49-48.23" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}