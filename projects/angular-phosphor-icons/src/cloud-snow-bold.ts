import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cloud-snow-bold]',
  standalone: true,
})
export class UiIconCloudSnowBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="168" cy="208" r="16"/><circle cx="120" cy="208" r="16"/><circle cx="72" cy="208" r="16"/><path d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}