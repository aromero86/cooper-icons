import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[eject-fill]',
  standalone: true,
})
export class UiIconEjectFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M33.31,126.24a15.59,15.59,0,0,1,3.1-17.12h0l73.73-77.51a24.76,24.76,0,0,1,35.72,0l73.73,77.51a15.59,15.59,0,0,1,3.1,17.12A16.18,16.18,0,0,1,207.76,136H48.24A16.18,16.18,0,0,1,33.31,126.24ZM208,152H48a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V168A16,16,0,0,0,208,152Z"/></svg>`;
    }
}