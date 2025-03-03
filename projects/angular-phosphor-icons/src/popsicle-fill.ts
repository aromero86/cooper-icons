import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[popsicle-fill]',
  standalone: true,
})
export class UiIconPopsicleFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,8A72.08,72.08,0,0,0,56,80v96a16,16,0,0,0,16,16h32v40a24,24,0,0,0,48,0V192h32a16,16,0,0,0,16-16V80A72.08,72.08,0,0,0,128,8ZM112,152a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm24,80a8,8,0,0,1-16,0V192h16Zm24-80a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Z"/></svg>`;
    }
}