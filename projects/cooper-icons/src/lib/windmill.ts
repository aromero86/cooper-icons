import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[windmill]',
  standalone: true,
})
export class UiIconWindmill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M148.1,61.86l-76-44.75a8,8,0,0,0-11,2.83l-12,20.34a8,8,0,0,0,2.84,11l152.1,89.52a8,8,0,0,1,2.84,11l-12,20.34a8,8,0,0,1-11,2.83l-76-44.75" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M93.86,75.9l-44.75,76a8,8,0,0,0,2.83,11l20.34,12a8,8,0,0,0,11-2.84L172.76,20a8,8,0,0,1,11-2.84l20.34,12a8,8,0,0,1,2.83,11l-44.75,76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="32" y1="232" x2="224" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="166.36" y1="164.55" x2="176" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="90.27" y1="160.11" x2="80" y2="232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}