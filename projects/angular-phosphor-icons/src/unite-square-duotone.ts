import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[unite-square-duotone]',
  standalone: true,
})
export class UiIconUniteSquareDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216" opacity="0.2"/><polygon points="96 216 216 216 216 96 160 96 160 40 40 40 40 160 96 160 96 216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}