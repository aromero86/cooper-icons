import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[google-cardboard-logo-bold]',
  standalone: true,
})
export class UiIconGoogleCardboardLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M24,192V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160l-26.34-26.34a8,8,0,0,0-11.32,0L96,200H32A8,8,0,0,1,24,192Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="82" cy="126" r="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="174" cy="126" r="22" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}