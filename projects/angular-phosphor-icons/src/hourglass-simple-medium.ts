import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hourglass-simple-medium]',
  standalone: true,
})
export class UiIconHourglassSimpleMedium {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M50.36,53.66A8,8,0,0,1,56,40H200a8,8,0,0,1,5.66,13.66L128,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M50.36,202.34A8,8,0,0,0,56,216H200a8,8,0,0,0,5.66-13.66L128,128Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="128" x2="128" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="178.13" y1="80" x2="77.87" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}