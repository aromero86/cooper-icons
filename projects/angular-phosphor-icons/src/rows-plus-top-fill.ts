import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[rows-plus-top-fill]',
  standalone: true,
})
export class UiIconRowsPlusTopFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,176v24a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V176a16,16,0,0,1,16-16H208A16,16,0,0,1,224,176ZM208,88H48a16,16,0,0,0-16,16v24a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V104A16,16,0,0,0,208,88ZM104,48h16V64a8,8,0,0,0,16,0V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16Z"/></svg>`;
    }
}