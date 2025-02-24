import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[goggles-fill]',
  standalone: true,
})
export class UiIconGogglesFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M184,64H72A72.08,72.08,0,0,0,0,136a24.06,24.06,0,0,0,17,23c6.06,20.37,37.63,33,55,33a40.07,40.07,0,0,0,39.2-32h33.6A40.07,40.07,0,0,0,184,192c17.33,0,48.9-12.66,55-33a24.06,24.06,0,0,0,17-23A72.08,72.08,0,0,0,184,64ZM89,169a8,8,0,0,1-11.31,0L53.14,144.45a8,8,0,0,1,11.31-11.31L89,157.65A8,8,0,0,1,89,169Zm119.52-.49a8,8,0,0,1-11.31,0l-25.41-25.4a8,8,0,0,1,11.32-11.32l25.4,25.41A8,8,0,0,1,208.48,168.48Zm29.2-26.86C229.34,123.25,200.34,112,184,112a40.07,40.07,0,0,0-39.2,32H111.2A40.07,40.07,0,0,0,72,112c-16.34,0-45.34,11.25-53.68,29.62A8,8,0,0,1,16,136,56.06,56.06,0,0,1,72,80H184a56.06,56.06,0,0,1,56,56A8,8,0,0,1,237.68,141.62Z"/></svg>`;
    }
}