import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[potted-plant-bold]',
  standalone: true,
})
export class UiIconPottedPlantBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M147.9,108.1c-23.94-39.91,8-79.81,75.82-75.82C227.71,100.11,187.81,132,147.9,108.1Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M94.35,110.35c17.11-28.5-5.7-57-54.15-54.15C37.35,104.65,65.85,127.46,94.35,110.35Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="56" y1="156" x2="200" y2="156" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M183.11,156l-13.72,61.74a8,8,0,0,1-7.81,6.26H94.42a8,8,0,0,1-7.81-6.26L72.89,156" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="147.9" y1="108.1" x2="100" y2="156" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="94.35" y1="110.35" x2="120" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}