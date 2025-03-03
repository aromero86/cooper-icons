import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flying-saucer-thin]',
  standalone: true,
})
export class UiIconFlyingSaucerThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="168" y1="192" x2="176" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="192" x2="128" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="88" y1="192" x2="80" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M177,68.82C214.29,76.61,240,93,240,112c0,26.51-50.14,48-112,48S16,138.51,16,112c0-19,25.86-35.49,63.35-43.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M72,99.9a15.94,15.94,0,0,0,12.34,15.52A195.87,195.87,0,0,0,128,120a195.71,195.71,0,0,0,43.64-4.58A16,16,0,0,0,184,99.9V96a56,56,0,0,0-56.74-56C96.48,40.4,72,66.06,72,96.83Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}