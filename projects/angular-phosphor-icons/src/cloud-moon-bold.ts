import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cloud-moon-bold]',
  standalone: true,
})
export class UiIconCloudMoonBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M64.38,137.75A64.14,64.14,0,0,1,29.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,156,80c0,.63,0,1.27,0,1.9" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}