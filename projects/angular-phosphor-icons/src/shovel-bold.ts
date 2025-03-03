import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[shovel-bold]',
  standalone: true,
})
export class UiIconShovelBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="192" y1="16" x2="240" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="216" y1="40" x2="88" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M32,232a8,8,0,0,1-8-8V144a8,8,0,0,1,2.34-5.66l56-56a8,8,0,0,1,11.32,0l80,80a8,8,0,0,1,0,11.32l-56,56A8,8,0,0,1,112,232Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}