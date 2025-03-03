import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[fish-duotone]',
  standalone: true,
})
export class UiIconFishDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M148.89,155.11A43.91,43.91,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.22c-13.9,18-23.41,44.16-24.31,81.65L8,175.87l56.07,16.06,16,56.07,24-56.07c37.51-.9,63.64-10.41,81.68-24.31A43.92,43.92,0,0,1,148.89,155.11Z" opacity="0.2"/><circle cx="156" cy="76" r="12"/><path d="M8,175.87l56.07,16.06,16,56.07,24-56.07C258.51,188.26,220,38.68,219,37c-1.73-1-151.25-39.46-155,114.9Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M185.82,167.62A44,44,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}