import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-deposit-duotone]',
  standalone: true,
})
export class UiIconHandDepositDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,88H64a8,8,0,0,0-8,8V200h80.42a20,20,0,0,1,36.9-14L184,202.31V96A8,8,0,0,0,176,88Z" opacity="0.2"/><line x1="120" y1="128" x2="120" y2="16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="88 48 120 16 152 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,128h0a82.38,82.38,0,0,1,40,70.65V240" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,88H64a8,8,0,0,0-8,8V200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M160.94,240l-22.26-34a20,20,0,0,1,34.64-20L184,202.31V96a8,8,0,0,0-8-8H160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}