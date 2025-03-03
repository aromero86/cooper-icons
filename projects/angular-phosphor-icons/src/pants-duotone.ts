import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pants-duotone]',
  standalone: true,
})
export class UiIconPantsDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M193.94,39A8,8,0,0,0,186,32H70a8,8,0,0,0-7.94,7L54,104c.68,0,1.36,0,2,0A40,40,0,0,0,96,64h64a40,40,0,0,0,40,40c.69,0,1.37,0,2.05,0Z" opacity="0.2"/><path d="M186,32a8,8,0,0,1,7.94,7l22,176a8,8,0,0,1-7.94,9H167.31a8,8,0,0,1-7.76-6.06L128,96,96.45,217.94A8,8,0,0,1,88.69,224H48a8,8,0,0,1-7.94-9l22-176A8,8,0,0,1,70,32Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="96" x2="128" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="58.94" y1="64" x2="197.06" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,64a40,40,0,0,1-40,40c-.69,0-1.37,0-2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M202.06,104c-.68,0-1.37,0-2.06,0a40,40,0,0,1-40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}