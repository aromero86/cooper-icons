import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[swatches-thin]',
  standalone: true,
})
export class UiIconSwatchesThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="76" cy="180" r="8"/><path d="M110.84,186.25a35.71,35.71,0,0,1-41.34,29.2h0a36,36,0,0,1-28.95-41.71l25-143.13a8,8,0,0,1,9.19-6.49l54.67,9.73a8,8,0,0,1,6.44,9.26Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M232,156.19V208a8,8,0,0,1-8,8H76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M121.42,125.76l80.79-29.28a8,8,0,0,1,10.22,4.75l19.09,52.21a7.93,7.93,0,0,1-4.77,10.17L88.16,213.84A35.07,35.07,0,0,1,76,216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}