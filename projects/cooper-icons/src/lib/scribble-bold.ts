import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[scribble-bold]',
  standalone: true,
})
export class UiIconScribbleBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,40,46.63,81.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L78.63,177.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L200,184a22.62,22.62,0,0,0,0,32h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}