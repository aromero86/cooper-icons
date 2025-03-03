import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chat-teardrop-dots-thin]',
  standalone: true,
})
export class UiIconChatTeardropDotsThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="132" cy="128" r="8"/><circle cx="88" cy="128" r="8"/><circle cx="176" cy="128" r="8"/><path d="M132,216H48a8,8,0,0,1-8-8V124a92,92,0,0,1,92-92h0a92,92,0,0,1,92,92h0A92,92,0,0,1,132,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}