import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-arrow-down-light]',
  standalone: true,
})
export class UiIconHandArrowDownLight {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M48,208H16a8,8,0,0,1-8-8V160a8,8,0,0,1,8-8H48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><path d="M112,160h32l67-15.41a16.61,16.61,0,0,1,21,16h0a16.59,16.59,0,0,1-9.18,14.85L184,192l-64,16H48V152l25-25a24,24,0,0,1,17-7H140a20,20,0,0,1,20,20h0a20,20,0,0,1-20,20Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><line x1="192" y1="24" x2="192" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/><polyline points="224 72 192 104 160 72" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="12"/></svg>`;
    }
}