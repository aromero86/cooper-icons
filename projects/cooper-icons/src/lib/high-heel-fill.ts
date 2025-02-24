import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[high-heel-fill]',
  standalone: true,
})
export class UiIconHighHeelFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M32,144a95.28,95.28,0,0,1,37.53,7.67,4,4,0,0,1,2.47,3.7V192a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V148a4,4,0,0,1,4-4Zm199,12.19L180,144.71,69.66,34.34a8,8,0,0,0-11.56.26C36.11,58.64,24,89,24,120a8,8,0,0,0,8,8,111.2,111.2,0,0,1,63.34,19.7,112.45,112.45,0,0,1,40.55,50.39A15.9,15.9,0,0,0,150.72,208H240a16,16,0,0,0,16-16v-4.73A31.72,31.72,0,0,0,231,156.19Z"/></svg>`;
    }
}