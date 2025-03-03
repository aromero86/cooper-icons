import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[rewind-circle-bold]',
  standalone: true,
})
export class UiIconRewindCircleBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M117.2,85.18a12,12,0,0,0-12.7,1.45l-40,32a12,12,0,0,0,0,18.74l40,32A12,12,0,0,0,124,160V96A12,12,0,0,0,117.2,85.18Z"/><path d="M173.2,85.18a12,12,0,0,0-12.7,1.45l-40,32a12,12,0,0,0,0,18.74l40,32A12,12,0,0,0,180,160V96A12,12,0,0,0,173.2,85.18Z"/></svg>`;
    }
}