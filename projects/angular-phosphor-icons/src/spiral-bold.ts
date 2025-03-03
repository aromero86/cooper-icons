import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[spiral-bold]',
  standalone: true,
})
export class UiIconSpiralBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M124,136a8,8,0,0,1-8-8,16,16,0,0,1,16-16,26,26,0,0,1,26,26,36,36,0,0,1-36,36,46,46,0,0,1-46-46,56,56,0,0,1,56-56,66,66,0,0,1,66,66,76,76,0,0,1-76,76,86,86,0,0,1-86-86,96,96,0,0,1,96-96A106,106,0,0,1,238,138" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}