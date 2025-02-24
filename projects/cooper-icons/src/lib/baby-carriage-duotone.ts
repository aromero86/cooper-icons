import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[baby-carriage-duotone]',
  standalone: true,
})
export class UiIconBabyCarriageDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72H144Z" opacity="0.2"/><path d="M48,112H232a0,0,0,0,1,0,0v0a72,72,0,0,1-72,72H120a72,72,0,0,1-72-72v0a0,0,0,0,1,0,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M16,80a32,32,0,0,1,32,32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="88" cy="224" r="16"/><circle cx="192" cy="224" r="16"/><line x1="144" y1="112" x2="209.43" y2="59.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}