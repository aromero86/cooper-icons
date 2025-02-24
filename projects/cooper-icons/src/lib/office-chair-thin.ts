import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[office-chair-thin]',
  standalone: true,
})
export class UiIconOfficeChairThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M72,232h0a24,24,0,0,1,24-24h64a24,24,0,0,1,24,24h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="168" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M16,128H40a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M93.72,24a8,8,0,0,0-7.92,6.87l-13.72,96A8,8,0,0,0,80,136h96a8,8,0,0,0,7.92-9.13l-13.72-96A8,8,0,0,0,162.28,24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}