import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[axe-bold]',
  standalone: true,
})
export class UiIconAxeBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M164.47,185.65a8,8,0,0,1-13.6-4.68c-7.09-53.14-42.41-83.8-59.45-95.76A8,8,0,0,1,90.33,73L129,34.33a8,8,0,0,1,12.2,1.09c12,17,42.62,52.36,95.76,59.45a8,8,0,0,1,4.68,13.6Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128.93,123.35,46.14,206.14a20,20,0,0,1-28.28-28.28l84.31-84.32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M149.54,46.17l16.32-16.31a20,20,0,0,1,28.28,28.28L179.35,72.93" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}