import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[scribble-loop-bold]',
  standalone: true,
})
export class UiIconScribbleLoopBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M28,92.8S60,48,108,48c104,0,92.6,160-3.4,160-64,0-64-96,32-96,64,0,107.4,48,107.4,48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}