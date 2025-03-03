import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[popsicle-duotone]',
  standalone: true,
})
export class UiIconPopsicleDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,16h0a64,64,0,0,1,64,64v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80A64,64,0,0,1,128,16Z" opacity="0.2"/><path d="M128,16h0a64,64,0,0,1,64,64v96a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V80A64,64,0,0,1,128,16Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M144,184v48a16,16,0,0,1-16,16h0a16,16,0,0,1-16-16V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="72" x2="112" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="144" y1="72" x2="144" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}