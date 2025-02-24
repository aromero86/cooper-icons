import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[airplane-taxiing-bold]',
  standalone: true,
})
export class UiIconAirplaneTaxiingBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M144,100h64a32,32,0,0,1,32,32v24H61.06a32,32,0,0,1-30.65-22.8L16.34,86.3A8,8,0,0,1,24,76h8l24,24H92.91L80.42,62.53A8,8,0,0,1,88,52h8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="208" cy="204" r="20"/><circle cx="112" cy="204" r="20"/></svg>`;
    }
}