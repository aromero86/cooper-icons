import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[car-profile-duotone]',
  standalone: true,
})
export class UiIconCarProfileDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="64" cy="176" r="24" opacity="0.2"/><circle cx="192" cy="176" r="24" opacity="0.2"/><path d="M208,120,162.34,74.34A8,8,0,0,0,156.69,72H44.28a8,8,0,0,0-6.65,3.56L8,120Z" opacity="0.2"/><circle cx="64" cy="176" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="192" cy="176" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="176" x2="168" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M216,176h24a8,8,0,0,0,8-8V128a8,8,0,0,0-8-8H208L162.34,74.34A8,8,0,0,0,156.69,72H44.28a8,8,0,0,0-6.65,3.56L8,120v48a8,8,0,0,0,8,8H40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="208" y1="120" x2="8" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}