import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[sailboat-duotone]',
  standalone: true,
})
export class UiIconSailboatDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M16,176H240l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3Z" opacity="0.2"/><polygon points="136 8 32 136 136 136 136 8" opacity="0.2"/><path d="M16,176H240l-29.6,37a8,8,0,0,1-6.24,3H51.84a8,8,0,0,1-6.24-3Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="136 136 216 136 136 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="136 176 136 8 32 136 136 136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}