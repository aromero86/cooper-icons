import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hourglass-simple-fill]',
  standalone: true,
})
export class UiIconHourglassSimpleFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M211.31,196.69A16,16,0,0,1,200,224H56a16,16,0,0,1-11.32-27.31,1.59,1.59,0,0,0,.13-.13L116.43,128,44.82,59.44a1.59,1.59,0,0,0-.13-.13A16,16,0,0,1,56,32H200a16,16,0,0,1,11.32,27.31,1.59,1.59,0,0,0-.13.13L139.57,128l71.61,68.56A1.59,1.59,0,0,0,211.31,196.69Z"/></svg>`;
    }
}