import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[chart-scatter-thin]',
  standalone: true,
})
export class UiIconChartScatterThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="224 208 32 208 32 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><circle cx="132" cy="148" r="8"/><circle cx="108" cy="92" r="8"/><circle cx="76" cy="164" r="8"/><circle cx="172" cy="116" r="8"/><circle cx="196" cy="76" r="8"/><circle cx="188" cy="164" r="8"/></svg>`;
    }
}