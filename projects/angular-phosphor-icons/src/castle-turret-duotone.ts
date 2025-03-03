import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[castle-turret-duotone]',
  standalone: true,
})
export class UiIconCastleTurretDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M192,224V112l13.66-13.66A8,8,0,0,0,208,92.69V48a8,8,0,0,0-8-8H176V72H144V40H112V72H80V40H56a8,8,0,0,0-8,8V92.69a8,8,0,0,0,2.34,5.65L64,112V224h40V168a24,24,0,0,1,48,0v56Z" opacity="0.2"/><path d="M192,224V112l13.66-13.66A8,8,0,0,0,208,92.69V48a8,8,0,0,0-8-8H176V72H144V40H112V72H80V40H56a8,8,0,0,0-8,8V92.69a8,8,0,0,0,2.34,5.65L64,112V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,224V168a24,24,0,0,1,48,0v56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="40" y1="224" x2="216" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}