import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hourglass-simple-high-bold]',
  standalone: true,
})
export class UiIconHourglassSimpleHighBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="73.69" y1="76" x2="182.31" y2="76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}