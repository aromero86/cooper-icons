import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flag-banner-duotone]',
  standalone: true,
})
export class UiIconFlagBannerDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polygon points="232 56 40 56 88 104 40 152 186.29 152 232 56" opacity="0.2"/><polyline points="152 224 232 56 40 56 88 104 40 152 186.29 152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}