import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[folder-star-light]',
  standalone: true,
})
export class UiIconFolderStarLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,80V56a8,8,0,0,1,8-8H92.69a8,8,0,0,1,5.65,2.34L128,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M120.56,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8v32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polygon points="184 198.54 213.67 216 205.6 183.41 232 161.61 197.35 158.94 184 128 170.65 158.94 136 161.61 162.4 183.41 154.33 216 184 198.54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}