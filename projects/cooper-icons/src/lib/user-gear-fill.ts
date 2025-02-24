import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[user-gear-fill]',
  standalone: true,
})
export class UiIconUserGearFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M198.13,194.85A8,8,0,0,1,192,208H24a8,8,0,0,1-6.12-13.15c14.94-17.78,33.52-30.41,54.17-37.17a68,68,0,1,1,71.9,0C164.6,164.44,183.18,177.07,198.13,194.85ZM255.18,154a8,8,0,0,1-6.94,4,7.92,7.92,0,0,1-4-1.07l-4.67-2.7a23.92,23.92,0,0,1-7.58,4.39V164a8,8,0,0,1-16,0v-5.38a23.92,23.92,0,0,1-7.58-4.39l-4.67,2.7a7.92,7.92,0,0,1-4,1.07,8,8,0,0,1-4-14.93l4.66-2.69a23.6,23.6,0,0,1,0-8.76l-4.66-2.69a8,8,0,1,1,8-13.86l4.67,2.7a23.92,23.92,0,0,1,7.58-4.39V108a8,8,0,0,1,16,0v5.38a23.92,23.92,0,0,1,7.58,4.39l4.67-2.7a8,8,0,1,1,8,13.86l-4.66,2.69a23.6,23.6,0,0,1,0,8.76l4.66,2.69A8,8,0,0,1,255.18,154ZM224,144a8,8,0,1,0-8-8A8,8,0,0,0,224,144Z"/></svg>`;
    }
}