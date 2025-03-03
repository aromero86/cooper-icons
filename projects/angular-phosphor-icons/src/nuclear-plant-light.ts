import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[nuclear-plant-light]',
  standalone: true,
})
export class UiIconNuclearPlantLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M192,24a16,16,0,0,1-16,16H152a16,16,0,0,0-16,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M160,8h-8a48,48,0,0,0-48,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="16" y1="216" x2="240" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M37.67,216C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64c1.83,48.91,20.7,94,34.19,120.36" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M136.15,88h32a8,8,0,0,1,8,7.63c2.35,53.58,28.62,103.25,38.64,120.37" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}