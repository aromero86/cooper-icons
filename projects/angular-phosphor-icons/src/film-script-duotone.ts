import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[film-script-duotone]',
  standalone: true,
})
export class UiIconFilmScriptDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="32" width="160" height="192" rx="8" opacity="0.2"/><rect x="48" y="32" width="160" height="192" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="84" cy="80" r="12"/><circle cx="84" cy="176" r="12"/><circle cx="84" cy="128" r="12"/></svg>`;
    }
}