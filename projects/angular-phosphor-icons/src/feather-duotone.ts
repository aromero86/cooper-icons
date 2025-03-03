import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[feather-duotone]',
  standalone: true,
})
export class UiIconFeatherDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M136,120l-24,24V64.52L66.34,109.66A8,8,0,0,0,64,115.31V192h76.69a8,8,0,0,0,5.65-2.34L215.6,119.6Z" opacity="0.2"/><line x1="184" y1="72" x2="32" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M146.34,189.66a8,8,0,0,1-5.65,2.34H64V115.31a8,8,0,0,1,2.34-5.65L136.4,40.4a56,56,0,0,1,79.2,79.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="64.52" x2="112" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="136" y1="120" x2="215.2" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}