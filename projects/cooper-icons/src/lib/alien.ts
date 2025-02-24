import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[alien]',
  standalone: true,
})
export class UiIconAlien {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,112c0,48.6-56,120-88,120S40,160.6,40,112a88,88,0,0,1,176,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,104h0a32,32,0,0,1,32,32v0a8,8,0,0,1-8,8h0a32,32,0,0,1-32-32v0a8,8,0,0,1,8-8Z" transform="translate(184 248) rotate(-180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M176,104h0a8,8,0,0,1,8,8v0a32,32,0,0,1-32,32h0a8,8,0,0,1-8-8v0a32,32,0,0,1,32-32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="184" x2="144" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}