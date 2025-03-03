import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[alien-bold]',
  standalone: true,
})
export class UiIconAlienBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><ellipse cx="92" cy="124" rx="16.97" ry="29.39" transform="translate(-60.74 101.37) rotate(-45)"/><ellipse cx="164" cy="124" rx="29.39" ry="16.97" transform="translate(-39.65 152.28) rotate(-45)"/><line x1="116" y1="184" x2="140" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}