import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chat-teardrop-text-thin]',
  standalone: true,
})
export class UiIconChatTeardropTextThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="96" y1="112" x2="164" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="96" y1="144" x2="164" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}