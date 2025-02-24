import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[heart-break-duotone]',
  standalone: true,
})
export class UiIconHeartBreakDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M178,48a53.79,53.79,0,0,0-38.18,15.82L128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122A54,54,0,0,0,178,48Z" opacity="0.2"/><path d="M128,75.63,116.18,63.82A54,54,0,0,0,24,102c0,66,104,122,104,122s104-56,104-122a54,54,0,0,0-92.18-38.18L112,91.63l30.18,30.19L120,144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}