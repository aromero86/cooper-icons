import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[swimming-pool-duotone]',
  standalone: true,
})
export class UiIconSwimmingPoolDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,208c24,0,24,16,48,16s24-16,48-16,24,16,48,16,24-16,48-16V168c-24,0-24,16-48,16s-24-16-48-16-24,16-48,16-24-16-48-16Z" opacity="0.2"/><line x1="88" y1="56" x2="168" y2="56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="88" x2="168" y2="88" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="120" x2="168" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="32" x2="88" y2="141.39" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="32" x2="168" y2="143.29" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,168c24,0,24,16,48,16s24-16,48-16,24,16,48,16,24-16,48-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32,208c24,0,24,16,48,16s24-16,48-16,24,16,48,16,24-16,48-16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}