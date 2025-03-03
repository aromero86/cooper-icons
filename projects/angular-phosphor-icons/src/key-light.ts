import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[key-light]',
  standalone: true,
})
export class UiIconKeyLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M93.17,122.83A71.68,71.68,0,0,1,88,95.91c0-38.58,31.08-70.64,69.64-71.87A72,72,0,0,1,232,98.36C230.73,136.92,198.67,168,160.09,168a71.68,71.68,0,0,1-26.92-5.17h0L120,176H96v24H72v24H40a8,8,0,0,1-8-8V187.31a8,8,0,0,1,2.34-5.65l58.83-58.83Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><circle cx="180" cy="76" r="10"/></svg>`;
    }
}