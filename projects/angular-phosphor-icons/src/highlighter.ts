import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[highlighter]',
  standalone: true,
})
export class UiIconHighlighter {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="88 128 24 192 96 216 136 176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M184,160l-26.34,26.34a8,8,0,0,1-11.32,0L77.66,117.66a8,8,0,0,1,0-11.32L104,80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M248,112l-50.34,50.34a8,8,0,0,1-11.32,0L101.66,77.66a8,8,0,0,1,0-11.32L152,16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}