import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[security-camera]',
  standalone: true,
})
export class UiIconSecurityCamera {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="248" y1="144" x2="248" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="184" y1="36.69" x2="52.69" y2="168" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M8.59,164.59A2,2,0,0,0,10,168H52.69l37.65,37.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H248" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}