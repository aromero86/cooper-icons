import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flower-tulip-duotone]',
  standalone: true,
})
export class UiIconFlowerTulipDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,136a80,80,0,0,1,41.23-70v0C156,38,128,24,128,24S100,38,86.77,66v0A80,80,0,0,1,128,136Z" opacity="0.2"/><path d="M48,56h0a80,80,0,0,1,80,80v40a0,0,0,0,1,0,0h0A80,80,0,0,1,48,96V56A0,0,0,0,1,48,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,56h0a0,0,0,0,1,0,0V96a80,80,0,0,1-80,80h0a0,0,0,0,1,0,0V136A80,80,0,0,1,208,56Z" transform="translate(336 232) rotate(180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="80 208 128 232 176 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M86.77,66C100,38,128,24,128,24s28,14,41.23,42" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="232" x2="128" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}