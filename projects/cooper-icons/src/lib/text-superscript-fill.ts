import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[text-superscript-fill]',
  standalone: true,
})
export class UiIconTextSuperscriptFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM126.55,179.41a8,8,0,1,1-13.1,9.18L92,158,70.55,188.59a8,8,0,1,1-13.1-9.18L82.23,144,57.45,108.59a8,8,0,1,1,13.1-9.18L92,130.05l21.45-30.64a8,8,0,0,1,13.1,9.18L101.77,144ZM192,160H152a8,8,0,0,1-6.4-12.8l36-48a12,12,0,1,0-19.15-14.46,13.06,13.06,0,0,0-2.58,4.81,8,8,0,1,1-15.68-3.18,28.17,28.17,0,1,1,50.2,22.44L168,144h24a8,8,0,0,1,0,16Z"/></svg>`;
    }
}