import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cat-duotone]',
  standalone: true,
})
export class UiIconCatDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M67.6,67.6h0a102.87,102.87,0,0,1,120.8,0h0l21.94-25.24A8,8,0,0,1,224,48v88c0,48.6-43,88-96,88s-96-39.4-96-88V48a8,8,0,0,1,13.66-5.66Z" opacity="0.2"/><line x1="128" y1="192" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="84" cy="140" r="12"/><circle cx="172" cy="140" r="12"/><line x1="128" y1="48" x2="128" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="144 176 128 192 112 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="53.01" x2="96" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="53.01" x2="160" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M67.6,67.6h0a102.87,102.87,0,0,1,120.8,0h0l21.94-25.24A8,8,0,0,1,224,48v88c0,48.6-43,88-96,88s-96-39.4-96-88V48a8,8,0,0,1,13.66-5.66Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}