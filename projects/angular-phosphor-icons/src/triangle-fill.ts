import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[triangle-fill]',
  standalone: true,
})
export class UiIconTriangleFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M236.78,211.81A24.34,24.34,0,0,1,215.45,224H40.55a24.34,24.34,0,0,1-21.33-12.19,23.51,23.51,0,0,1,0-23.72L106.65,36.22a24.76,24.76,0,0,1,42.7,0L236.8,188.09A23.51,23.51,0,0,1,236.78,211.81Z"/></svg>`;
    }
}