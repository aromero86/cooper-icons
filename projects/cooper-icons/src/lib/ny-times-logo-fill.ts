import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[ny-times-logo-fill]',
  standalone: true,
})
export class UiIconNyTimesLogoFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M172,136a12,12,0,1,1-12,12A12,12,0,0,1,172,136Zm12.62-32.75L118.91,72.59A71.95,71.95,0,0,0,56.06,141.3l68.18-36.36A8,8,0,0,1,136,112V215.55a71.64,71.64,0,0,0,60.71-50A8,8,0,0,1,212,170.4,88,88,0,1,1,51.74,100.1,36,36,0,0,1,68,32a8.05,8.05,0,0,1,3.38.75L189.63,87.93A20,20,0,0,0,188,48a8,8,0,0,1,0-16,36,36,0,0,1,0,72A8.05,8.05,0,0,1,184.62,103.25ZM96,208.47V138.13L57.51,158.66A72.23,72.23,0,0,0,96,208.47ZM96.13,62,66.37,48.07a20,20,0,0,0-5.2,38.71c.6-.71,1.2-1.42,1.84-2.11A88,88,0,0,1,96.13,62Z"/></svg>`;
    }
}