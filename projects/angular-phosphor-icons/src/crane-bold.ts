import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[crane-bold]',
  standalone: true,
})
export class UiIconCraneBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="24" y1="168" x2="128" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M24,200V96a8,8,0,0,1,8-8h72l24,80v32a8,8,0,0,1-8,8H32A8,8,0,0,1,24,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="64" y1="88" x2="64" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104,88,224,24V160a8,8,0,0,1-8,8H196a8,8,0,0,1-8-8v-8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}