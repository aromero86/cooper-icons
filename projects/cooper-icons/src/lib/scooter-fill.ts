import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[scooter-fill]',
  standalone: true,
})
export class UiIconScooterFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M244,172a32,32,0,1,1-49.38-26.85l-9-26.89-51.46,62.81A8,8,0,0,1,128,184H73.66a32,32,0,1,1,2.08-16h48.47l55.46-67.69L162.23,48H136a8,8,0,0,1,0-16h32a8,8,0,0,1,7.59,5.47L209.8,140.08c.72-.05,1.46-.08,2.2-.08A32,32,0,0,1,244,172Z"/></svg>`;
    }
}