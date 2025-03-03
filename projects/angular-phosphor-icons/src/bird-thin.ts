import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bird-thin]',
  standalone: true,
})
export class UiIconBirdThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="164" cy="68" r="8"/><path d="M104,99.52V76.89c0-28.77,23-52.75,51.74-52.89a52,52,0,0,1,50.59,38.89L232,80,208,96v24a96,96,0,0,1-96,96H24a8,8,0,0,1-6.25-13Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><line x1="128" y1="128" x2="54.67" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}