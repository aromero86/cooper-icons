import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dice-four-thin]',
  standalone: true,
})
export class UiIconDiceFourThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="176" height="176" rx="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="100" cy="100" r="8"/><circle cx="156" cy="100" r="8"/><circle cx="100" cy="156" r="8"/><circle cx="156" cy="156" r="8"/></svg>`;
    }
}