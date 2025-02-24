import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[grains]',
  standalone: true,
})
export class UiIconGrains {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,224h0a80,80,0,0,1-80-80V120h0a80,80,0,0,1,80,80Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,120h0a0,0,0,0,1,0,0v24a80,80,0,0,1-80,80h0a0,0,0,0,1,0,0V200a80,80,0,0,1,80-80Z" transform="translate(336 344) rotate(180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,120V64h0a80,80,0,0,0-80,80v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,120V64h0a80,80,0,0,1,80,80v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M84.05,72.57C95.62,40.19,128,24,128,24S160.38,40.19,172,72.58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}