import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[traffic-sign-duotone]',
  standalone: true,
})
export class UiIconTrafficSignDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="46.3" y="46.3" width="163.41" height="163.41" rx="8.56" transform="translate(-53.02 128) rotate(-45)" opacity="0.2"/><path d="M88,152v-8a24,24,0,0,1,24-24h56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="46.3" y="46.3" width="163.41" height="163.41" rx="8.56" transform="translate(-53.02 128) rotate(-45)" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="144 96 168 120 144 144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}