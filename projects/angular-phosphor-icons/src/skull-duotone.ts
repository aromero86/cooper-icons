import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[skull-duotone]',
  standalone: true,
})
export class UiIconSkullDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24c-53,0-96,41.19-96,92,0,34.05,19.31,63.78,48,79.69V216a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V195.69c28.69-15.91,48-45.64,48-79.69C224,65.19,181,24,128,24ZM92,152a20,20,0,1,1,20-20A20,20,0,0,1,92,152Zm72,0a20,20,0,1,1,20-20A20,20,0,0,1,164,152Z" opacity="0.2"/><circle cx="92" cy="132" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="164" cy="132" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="224" x2="112" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="144" y1="224" x2="144" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V195.69C51.31,179.78,32,150.05,32,116c0-50.81,43-92,96-92s96,41.19,96,92c0,34.05-19.31,63.78-48,79.69Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}