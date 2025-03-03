import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flip-vertical-duotone]',
  standalone: true,
})
export class UiIconFlipVerticalDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" opacity="0.2"/><path d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}