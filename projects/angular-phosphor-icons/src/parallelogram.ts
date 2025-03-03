import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[parallelogram]',
  standalone: true,
})
export class UiIconParallelogram {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M24,208a8,8,0,0,1-7.3-11.28l64.8-144A8,8,0,0,1,88.81,48H232a8,8,0,0,1,7.3,11.28l-64.8,144a8,8,0,0,1-7.3,4.72Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}