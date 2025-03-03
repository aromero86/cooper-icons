import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tree-duotone]',
  standalone: true,
})
export class UiIconTreeDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,177.94a63.72,63.72,0,0,0,41.66,14c33.93-.86,62.43-30.22,62.34-64.16a64,64,0,0,0-40.13-59.2,68,68,0,0,0-127.74,0A64,64,0,0,0,24,127.82c-.09,33.94,28.42,63.3,62.35,64.16A63.71,63.71,0,0,0,128,177.94Z" opacity="0.2"/><line x1="128" y1="232" x2="128" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="152" x2="80" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="128" x2="176" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,177.94a63.72,63.72,0,0,0,41.66,14c33.93-.86,62.43-30.22,62.34-64.16a64,64,0,0,0-40.13-59.2,68,68,0,0,0-127.74,0A64,64,0,0,0,24,127.82c-.09,33.94,28.42,63.3,62.35,64.16A63.71,63.71,0,0,0,128,177.94Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}