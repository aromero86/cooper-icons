import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[currency-dollar-simple-fill]',
  standalone: true,
})
export class UiIconCurrencyDollarSimpleFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm16,160h-8v8a8,8,0,0,1-16,0v-8h-8a32,32,0,0,1-32-32,8,8,0,0,1,16,0,16,16,0,0,0,16,16h32a16,16,0,0,0,0-32H116a32,32,0,0,1,0-64h4V64a8,8,0,0,1,16,0v8h4a32,32,0,0,1,32,32,8,8,0,0,1-16,0,16,16,0,0,0-16-16H116a16,16,0,0,0,0,32h28a32,32,0,0,1,0,64Z"/></svg>`;
    }
}