import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[airplane-tilt-duotone]',
  standalone: true,
})
export class UiIconAirplaneTiltDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z" opacity="0.2"/><path d="M88,224l24-24V176l24-24,48,72,24-24-32-88,33-31A24,24,0,0,0,175,47L144,80,56,48,32,72l72,48L80,144H56L32,168l40,16Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}