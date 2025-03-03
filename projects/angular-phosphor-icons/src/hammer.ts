import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hammer]',
  standalone: true,
})
export class UiIconHammer {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="108" y1="116" x2="140" y2="148" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="228.06" y1="99.94" x2="188" y2="140" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M40,64,53.77,49.77a88,88,0,0,1,124.46,0l67.43,67.89a8,8,0,0,1,0,11.31L217,157.66a8,8,0,0,1-11.31,0L168,120,66.34,221.66a8,8,0,0,1-11.31,0L34.34,201a8,8,0,0,1,0-11.31L136,88,79.78,31.78" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}