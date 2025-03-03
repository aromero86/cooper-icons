import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[palette-thin]',
  standalone: true,
})
export class UiIconPaletteThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,192a24,24,0,0,1,24-24h46.21a24,24,0,0,0,23.4-18.65A96.48,96.48,0,0,0,224,127.17c-.45-52.82-44.16-95.7-97-95.17a96,96,0,0,0-95,96c0,41.81,26.73,73.44,64,86.61A24,24,0,0,0,128,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="128" cy="76" r="8"/><circle cx="84" cy="100" r="8"/><circle cx="84" cy="156" r="8"/><circle cx="172" cy="100" r="8"/></svg>`;
    }
}