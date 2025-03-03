import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[mask-happy-duotone]',
  standalone: true,
})
export class UiIconMaskHappyDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,48a8,8,0,0,0-10.89-7.47C190,46.41,160.89,55.71,128,55.71s-62-9.3-77.11-15.16A8,8,0,0,0,40,48v55.77C40,174.6,79.4,232,128,232s88-57.4,88-128.21Z" opacity="0.2"/><path d="M216,48a8,8,0,0,0-10.89-7.47C190,46.41,160.89,55.71,128,55.71s-62-9.3-77.11-15.16A8,8,0,0,0,40,48v55.77C40,174.6,79.4,232,128,232s88-57.4,88-128.21Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M144,128c4.39-4.91,12.89-8,20-8s15.61,3.09,20,8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,128c4.39-4.91,12.89-8,20-8s15.61,3.09,20,8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M162.36,168a44.89,44.89,0,0,1-68.72,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}