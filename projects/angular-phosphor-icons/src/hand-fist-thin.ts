import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-fist-thin]',
  standalone: true,
})
export class UiIconHandFistThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,104a24,24,0,0,1-48,0V64a24,24,0,0,1,48,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,64a24,24,0,0,1,48,0V88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,176a40,40,0,0,1,40-40H152a24,24,0,0,1-24-24V96a8,8,0,0,1,8-8h64a24,24,0,0,1,24,24v16a96,96,0,0,1-192,0V88a24,24,0,0,1,48,0v16a24,24,0,0,1-48,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}