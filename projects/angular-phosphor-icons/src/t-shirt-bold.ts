import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[t-shirt-bold]',
  standalone: true,
})
export class UiIconTShirtBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M192,120h26.32a7.77,7.77,0,0,0,7-4.42l17.9-36.81a8.12,8.12,0,0,0-3.1-10.52L192,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M64,120H37.68a7.77,7.77,0,0,1-7-4.42L12.82,78.77a8.12,8.12,0,0,1,3.1-10.52L64,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M160,40a32,32,0,0,1-64,0H64V208a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V40Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}