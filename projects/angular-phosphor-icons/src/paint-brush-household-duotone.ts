import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[paint-brush-household-duotone]',
  standalone: true,
})
export class UiIconPaintBrushHouseholdDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M225,31A24,24,0,0,0,191,31l-59,69L115.31,83.31a16,16,0,0,0-22.62,0L72,104l80,80,20.69-20.69a16,16,0,0,0,0-22.62L156,124l69-59A24,24,0,0,0,225,31Z" opacity="0.2"/><line x1="72" y1="104" x2="152" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="44" y1="188" x2="72" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="68" y1="212" x2="96" y2="184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M156,124l16.69,16.69a16,16,0,0,1,0,22.62L96,240,16,160,92.69,83.31a16,16,0,0,1,22.62,0L132,100l59-69A24,24,0,0,1,225,65Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}