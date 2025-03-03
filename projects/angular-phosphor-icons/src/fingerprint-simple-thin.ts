import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fingerprint-simple-thin]',
  standalone: true,
})
export class UiIconFingerprintSimpleThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M176,128a239.32,239.32,0,0,1-17.93,91.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M163.77,96A48,48,0,0,0,80,128a143.3,143.3,0,0,1-18,69.73" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M96,37.46A96.07,96.07,0,0,1,224,128a288.93,288.93,0,0,1-7.14,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M23.3,168A95.81,95.81,0,0,0,32,128,95.78,95.78,0,0,1,64,56.45" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M110.58,208q-3,6.63-6.57,13" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M128,128a192.3,192.3,0,0,1-6,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}