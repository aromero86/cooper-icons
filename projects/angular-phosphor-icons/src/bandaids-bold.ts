import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bandaids-bold]',
  standalone: true,
})
export class UiIconBandaidsBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}