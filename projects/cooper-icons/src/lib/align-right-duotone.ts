import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[align-right-duotone]',
  standalone: true,
})
export class UiIconAlignRightDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" opacity="0.2"/><rect x="32" y="144" width="152" height="56" rx="8" opacity="0.2"/><line x1="216" y1="40" x2="216" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="72" y="56" width="112" height="56" rx="8" transform="translate(256 168) rotate(180)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="32" y="144" width="152" height="56" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}