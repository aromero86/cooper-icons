import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[highlighter-circle-duotone]',
  standalone: true,
})
export class UiIconHighlighterCircleDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M195.88,60.12A96,96,0,1,0,88,215.29V152a8,8,0,0,1,8-8h8V96l48-24v72h8a8,8,0,0,1,8,8v63.29A96,96,0,0,0,195.88,60.12Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="104 144 104 96 152 72 152 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M168,215.3V152a8,8,0,0,0-8-8H96a8,8,0,0,0-8,8v63.3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}