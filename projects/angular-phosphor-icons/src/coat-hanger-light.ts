import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[coat-hanger-light]',
  standalone: true,
})
export class UiIconCoatHangerLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M96,72a32,32,0,0,1,64,0L19.22,177.6A8,8,0,0,0,24,192H232a8,8,0,0,0,4.79-14.4L128,96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}