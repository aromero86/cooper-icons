import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[speedometer-duotone]',
  standalone: true,
})
export class UiIconSpeedometerDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M29.89,186.59A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48A104.09,104.09,0,0,1,226.1,186.63a8,8,0,0,1-7.57,5.37H37.46A8.05,8.05,0,0,1,29.89,186.59Z" opacity="0.2"/><line x1="120" y1="160" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56.44,160a73,73,0,0,1-.44-8,72.06,72.06,0,0,1,95-68.25" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M220.62,104.64a104.38,104.38,0,0,1,5.48,82,8,8,0,0,1-7.57,5.37H37.46a8.05,8.05,0,0,1-7.57-5.41A104.06,104.06,0,0,1,24,151.19C24.44,94,71.73,47.49,129,48a103.68,103.68,0,0,1,46.4,11.38" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}