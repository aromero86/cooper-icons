import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chat-teardrop-text-fill]',
  standalone: true,
})
export class UiIconChatTeardropTextFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M132,24A100.11,100.11,0,0,0,32,124v84a16,16,0,0,0,16,16h84a100,100,0,0,0,0-200Zm32,128H96a8,8,0,0,1,0-16h68a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h68a8,8,0,0,1,0,16Z"/></svg>`;
    }
}