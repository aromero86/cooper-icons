import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-duotone]',
  standalone: true,
})
export class UiIconHandDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M188,56a20,20,0,0,0-20,20V44a20,20,0,0,0-40,0V60a20,20,0,0,0-40,0v92L69.32,122a20,20,0,0,0-34.64,20c32.57,68.72,49.14,90,93.32,90a80,80,0,0,0,80-80V76A20,20,0,0,0,188,56Z" opacity="0.2"/><path d="M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,120V44a20,20,0,0,1,40,0v76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}