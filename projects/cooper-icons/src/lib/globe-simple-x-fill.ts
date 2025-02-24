import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[globe-simple-x-fill]',
  standalone: true,
})
export class UiIconGlobeSimpleXFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M221.66,173.66,203.31,192l18.35,18.34a8,8,0,0,1-11.32,11.32L192,203.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L180.69,192l-18.35-18.34a8,8,0,0,1,11.32-11.32L192,180.69l18.34-18.35a8,8,0,0,1,11.32,11.32ZM232,128a8,8,0,0,1-8,8H96.25c3,53.73,35.33,80.6,36.77,81.77h0A8,8,0,0,1,128,232,104,104,0,1,1,232,128ZM148.41,42.4C159.94,57.67,174,83.49,175.79,120h39.84A88.19,88.19,0,0,0,148.41,42.4ZM96.23,120h63.54C157.46,78.4,137.55,52.9,128,43,118.46,52.89,98.54,78.39,96.23,120Z"/></svg>`;
    }
}