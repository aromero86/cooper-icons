import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[greater-than-fill]',
  standalone: true,
})
export class UiIconGreaterThanFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM187.35,135.26l-104,48a8,8,0,0,1-6.7-14.52L164.91,128,76.65,87.26a8,8,0,1,1,6.7-14.52l104,48a8,8,0,0,1,0,14.52Z"/></svg>`;
    }
}