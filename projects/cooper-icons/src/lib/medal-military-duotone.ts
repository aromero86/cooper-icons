import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[medal-military-duotone]',
  standalone: true,
})
export class UiIconMedalMilitaryDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="192" r="40" opacity="0.2"/><path d="M168,48v85.82l42.72-19.42a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9Z" opacity="0.2"/><path d="M88,133.82V48H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" opacity="0.2"/><circle cx="128" cy="192" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="168" y1="48" x2="168" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="88" y1="48" x2="88" y2="133.82" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}