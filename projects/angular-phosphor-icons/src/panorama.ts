import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[panorama]',
  standalone: true,
})
export class UiIconPanorama {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="204" cy="108" r="12"/><path d="M16,160.69l54.34-54.35a8,8,0,0,1,11.32,0l79.46,79.46" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M131.31,156,157,130.34a8,8,0,0,1,11.31,0l68.25,68.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}