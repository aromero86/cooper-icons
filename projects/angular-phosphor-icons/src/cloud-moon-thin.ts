import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cloud-moon-thin]',
  standalone: true,
})
export class UiIconCloudMoonThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M63,138.93A64.12,64.12,0,0,1,25.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,152,80c0,1,0,2-.07,3" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}