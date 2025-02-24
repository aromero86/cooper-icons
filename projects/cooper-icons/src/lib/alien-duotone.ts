import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[alien-duotone]',
  standalone: true,
})
export class UiIconAlienDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24a88,88,0,0,0-88,88c0,48.6,56,120,88,120s88-71.4,88-120A88,88,0,0,0,128,24ZM104,144a32,32,0,0,1-32-32,8,8,0,0,1,8-8,32,32,0,0,1,32,32A8,8,0,0,1,104,144Zm48,0a8,8,0,0,1-8-8,32,32,0,0,1,32-32,8,8,0,0,1,8,8A32,32,0,0,1,152,144Z" opacity="0.2"/><path d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,104h0a32,32,0,0,1,32,32v0a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v0A8,8,0,0,1,80,104Z" transform="translate(184 248) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,104h0a8,8,0,0,1,8,8v0a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v0A32,32,0,0,1,176,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="184" x2="144" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}