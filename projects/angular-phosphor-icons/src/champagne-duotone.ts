import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[champagne-duotone]',
  standalone: true,
})
export class UiIconChampagneDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M84.2,72c-7.9,46.13-8.9,104,35.8,104s43.7-57.87,35.8-104Z" opacity="0.2"/><line x1="96" y1="240" x2="144" y2="240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M97.7,16h44.6s52,160-22.3,160S97.7,16,97.7,16Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="120" y1="176" x2="120" y2="240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="220" cy="52" r="12"/><circle cx="196" cy="20" r="12"/><circle cx="196" cy="100" r="12"/><line x1="84.2" y1="72" x2="155.8" y2="72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}