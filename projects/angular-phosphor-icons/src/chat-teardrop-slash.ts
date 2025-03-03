import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chat-teardrop-slash]',
  standalone: true,
})
export class UiIconChatTeardropSlash {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M189.59,195.75A91.6,91.6,0,0,1,132,216H48a8,8,0,0,1-8-8V124A91.72,91.72,0,0,1,66.05,59.85" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.19,41A91.53,91.53,0,0,1,132,32h0a92,92,0,0,1,92,92h0a91.58,91.58,0,0,1-13.2,47.51" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}