import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[text-aa-duotone]',
  standalone: true,
})
export class UiIconTextAaDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><ellipse cx="200" cy="164" rx="32" ry="28" opacity="0.2"/><polygon points="125.18 152 34.82 152 80 56 125.18 152" opacity="0.2"/><polyline points="144 192 80 56 16 192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><ellipse cx="200" cy="164" rx="32" ry="28" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M232,192V132c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="125.18" y1="152" x2="34.82" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}