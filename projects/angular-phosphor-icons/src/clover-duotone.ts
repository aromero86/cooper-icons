import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[clover-duotone]',
  standalone: true,
})
export class UiIconCloverDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><g opacity="0.2"><path d="M128,24c-90,0,0,96,0,96S218,24,128,24Z"/><path d="M32,120c0,90,96,0,96,0S32,30,32,120Z"/><path d="M128,216c90,0,0-96,0-96S38,216,128,216Z"/><path d="M128,120s96,90,96,0S128,120,128,120Z"/></g><path d="M128,120s90-96,0-96S128,120,128,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,120s-96-90-96,0S128,120,128,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,120s-90,96,0,96S128,120,128,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,120s96,90,96,0S128,120,128,120Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M128,120s64,56,80,120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}