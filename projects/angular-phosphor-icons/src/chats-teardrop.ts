import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chats-teardrop]',
  standalone: true,
})
export class UiIconChatsTeardrop {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M96,176H32a8,8,0,0,1-8-8V104A72,72,0,0,1,96,32h0a72,72,0,0,1,72,72h0A72,72,0,0,1,96,176Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M92.1,176A72,72,0,0,0,160,224h64a8,8,0,0,0,8-8V152a72,72,0,0,0-68.06-71.89" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}