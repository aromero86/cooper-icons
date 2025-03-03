import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pen-nib-thin]',
  standalone: true,
})
export class UiIconPenNibThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M40,216l139.45-23.24a8,8,0,0,0,6.17-5.08L208,128,128,48,68.32,70.38a8,8,0,0,0-5.08,6.17Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M208,128l29.66-29.66a8,8,0,0,0,0-11.31L169,18.34a8,8,0,0,0-11.31,0L128,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="124" cy="132" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="40.01" y1="216" x2="109.86" y2="146.14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}