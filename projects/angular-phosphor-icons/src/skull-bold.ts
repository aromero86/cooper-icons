import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[skull-bold]',
  standalone: true,
})
export class UiIconSkullBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="92" cy="132" r="24"/><circle cx="164" cy="132" r="24"/><line x1="108" y1="224" x2="108" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="148" y1="224" x2="148" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M188,216a8,8,0,0,1-8,8H76a8,8,0,0,1-8-8V187.82C46.05,171,32,145.05,32,116c0-50.81,43-92,96-92s96,41.19,96,92c0,29.05-14.05,55-36,71.82Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}