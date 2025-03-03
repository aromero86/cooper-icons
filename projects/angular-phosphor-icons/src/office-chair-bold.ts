import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[office-chair-bold]',
  standalone: true,
})
export class UiIconOfficeChairBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M72,232h0a24,24,0,0,1,24-24h64a24,24,0,0,1,24,24h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="168" x2="128" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M16,128H40a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40h24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M154.41,24H101.59a8,8,0,0,0-7.93,6.78l-13.57,88A8,8,0,0,0,88,128h80a8,8,0,0,0,7.93-9.22l-13.57-88A8,8,0,0,0,154.41,24Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}