import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bandaids-duotone]',
  standalone: true,
})
export class UiIconBandaidsDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M206.63,94.63a32,32,0,0,0-45.26-45.26L128,82.75,173.25,128Z" opacity="0.2"/><path d="M49.37,161.37a32,32,0,0,0,45.26,45.26L128,173.25,82.75,128Z" opacity="0.2"/><path d="M94.63,49.37A32,32,0,0,0,49.37,94.63L82.75,128,128,82.75Z" opacity="0.2"/><path d="M173.25,128,128,173.25l33.37,33.38a32,32,0,0,0,45.26-45.26Z" opacity="0.2"/><path d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" opacity="0.5"/><circle cx="128" cy="128" r="12"/></svg>`;
    }
}