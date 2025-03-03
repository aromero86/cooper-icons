import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[toilet-thin]',
  standalone: true,
})
export class UiIconToiletThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="96" y1="64" x2="112" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M216,112a88,88,0,0,1-176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}