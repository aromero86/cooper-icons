import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[screencast-duotone]',
  standalone: true,
})
export class UiIconScreencastDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,48H40a8,8,0,0,0-8,8V192a16,16,0,0,1,16,16H216a8,8,0,0,0,8-8V56A8,8,0,0,0,216,48Z" opacity="0.2"/><path d="M32,96V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,192a16,16,0,0,1,16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,160a48,48,0,0,1,48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,128a80,80,0,0,1,80,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}