import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flag-pennant-fill]',
  standalone: true,
})
export class UiIconFlagPennantFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M248,104a8,8,0,0,1-5.37,7.56L64,173.69V216a8,8,0,0,1-16,0V40a8,8,0,0,1,10.63-7.56l184,64A8,8,0,0,1,248,104Z"/></svg>`;
    }
}