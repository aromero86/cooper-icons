import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hand-waving-bold]',
  standalone: true,
})
export class UiIconHandWavingBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M96.65,62a20,20,0,0,1,34.64-20l30,52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M69.32,94.67,55.08,70A20,20,0,0,1,89.73,50l31.17,54" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M158.87,160A40,40,0,0,1,168,105.58L161.32,94A20,20,0,0,1,196,74l17.31,30A80,80,0,0,1,74.7,184l-40-69.32a20,20,0,0,1,34.64-20L88.57,128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M220.11,40.63a60.21,60.21,0,0,0-24-14" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M58.23,228a121,121,0,0,1-18.16-24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}