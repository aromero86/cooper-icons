import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[arrows-out-simple-fill]',
  standalone: true,
})
export class UiIconArrowsOutSimpleFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,48V96a8,8,0,0,1-13.66,5.66L184,83.31l-34.34,34.35a8,8,0,0,1-11.32-11.32L172.69,72,154.34,53.66A8,8,0,0,1,160,40h48A8,8,0,0,1,216,48ZM106.34,138.34,72,172.69,53.66,154.34A8,8,0,0,0,40,160v48a8,8,0,0,0,8,8H96a8,8,0,0,0,5.66-13.66L83.31,184l34.35-34.34a8,8,0,0,0-11.32-11.32Z"/></svg>`;
    }
}