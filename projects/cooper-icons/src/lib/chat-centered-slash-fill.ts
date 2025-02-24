import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chat-centered-slash-fill]',
  standalone: true,
})
export class UiIconChatCenteredSlashFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M232,56V184a15.93,15.93,0,0,1-4.82,11.42,4,4,0,0,1-5.68-.25L86.52,46.69a4,4,0,0,1,3-6.69H216A16,16,0,0,1,232,56ZM53.92,34.62A8,8,0,0,0,40,40h0A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200h27.07l19.44,21.38a8,8,0,1,0,11.84-10.76Z"/></svg>`;
    }
}