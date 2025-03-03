import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[pizza-duotone]',
  standalone: true,
})
export class UiIconPizzaDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M136,168a32,32,0,0,1,51.2-25.6l30.9-50.64a160.1,160.1,0,0,0-180.2,0l15.84,26a32,32,0,1,1,30.51,50l36.9,60.45a8,8,0,0,0,13.7,0L154,196.78A32,32,0,0,1,136,168Z" opacity="0.2"/><path d="M25.16,70.9a8,8,0,0,1,2.7-11,193.49,193.49,0,0,1,200.28,0,8,8,0,0,1,2.7,11l-96,157.26a8,8,0,0,1-13.7,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M37.9,91.76a160.1,160.1,0,0,1,180.2,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M154,196.79a32,32,0,1,1,33.2-54.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M53.74,117.71a32,32,0,1,1,30.65,50" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}