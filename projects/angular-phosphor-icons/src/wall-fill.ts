import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wall-fill]',
  standalone: true,
})
export class UiIconWallFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M136,92h92a4,4,0,0,0,4-4V56a8,8,0,0,0-8-8H140a4,4,0,0,0-4,4Z"/><path d="M184,152h44a4,4,0,0,0,4-4V112a4,4,0,0,0-4-4H184Z"/><rect x="88" y="108" width="80" height="44"/><path d="M72,108H28a4,4,0,0,0-4,4v36a4,4,0,0,0,4,4H72Z"/><path d="M136,168v36a4,4,0,0,0,4,4h84a8,8,0,0,0,8-8V172a4,4,0,0,0-4-4Z"/><path d="M120,92V52a4,4,0,0,0-4-4H32a8,8,0,0,0-8,8V88a4,4,0,0,0,4,4Z"/><path d="M120,168H28a4,4,0,0,0-4,4v28a8,8,0,0,0,8,8h84a4,4,0,0,0,4-4Z"/></svg>`;
    }
}