import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[smiley-nervous-bold]',
  standalone: true,
})
export class UiIconSmileyNervousBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="92" cy="108" r="16"/><circle cx="164" cy="108" r="16"/><path d="M86.72,165.81C92.65,161.43,94.79,152,104,152c12,0,12,16,24,16s12-16,24-16c9.21,0,11.35,9.43,17.28,13.81" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}