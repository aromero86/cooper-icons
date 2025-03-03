import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[tennis-ball-duotone]',
  standalone: true,
})
export class UiIconTennisBallDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,128a96,96,0,0,1,95.83-96h0A96,96,0,0,1,32,127.83Z" opacity="0.2"/><path d="M128.17,224.17a96,96,0,0,1,95.83-96h0A96,96,0,0,1,128.17,224Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M127.83,32A96,96,0,0,1,32,127.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,128.17A96,96,0,0,0,128.17,224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}