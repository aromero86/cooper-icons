import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hoodie-bold]',
  standalone: true,
})
export class UiIconHoodieBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M172,184v24a8,8,0,0,0,8,8h26.57a8,8,0,0,0,7.71-5.9l21.44-78.59a8,8,0,0,0-1.06-6.54L180.38,43.56A8,8,0,0,0,173.73,40H82.27a8,8,0,0,0-6.65,3.56L21.34,125a8,8,0,0,0-1.06,6.54L41.72,210.1a8,8,0,0,0,7.71,5.9H76a8,8,0,0,0,8-8V184" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,84l56-35V176a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V49Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="148" y1="71.49" x2="148" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="108" y1="71.49" x2="108" y2="136" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}