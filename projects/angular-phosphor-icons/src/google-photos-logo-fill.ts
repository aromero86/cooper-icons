import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[google-photos-logo-fill]',
  standalone: true,
})
export class UiIconGooglePhotosLogoFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M232,120H192.49A72,72,0,0,0,128,16a8,8,0,0,0-8,8V63.51A72,72,0,0,0,16,128a8,8,0,0,0,8,8H63.51A72,72,0,0,0,128,240a8,8,0,0,0,8-8V192.49A72,72,0,0,0,240,128,8,8,0,0,0,232,120ZM88,72a55.31,55.31,0,0,1,32,10v38H32.57A56.09,56.09,0,0,1,88,72Zm80,112A55.31,55.31,0,0,1,136,174V136h87.43A56.09,56.09,0,0,1,168,184Z"/></svg>`;
    }
}