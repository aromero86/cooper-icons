import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[church-fill]',
  standalone: true,
})
export class UiIconChurchFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M228.12,145.14,192,123.47V104a8,8,0,0,0-4-7L136,67.36V48h16a8,8,0,0,0,0-16H136V16a8,8,0,0,0-16,0V32H104a8,8,0,0,0,0,16h16V67.36L68,97.05a8,8,0,0,0-4,7v19.47L27.88,145.14A8,8,0,0,0,24,152v64a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V168a16,16,0,0,1,32,0v48a8,8,0,0,0,8,8h72a8,8,0,0,0,8-8V152A8,8,0,0,0,228.12,145.14ZM64,208H40V156.53l24-14.4Zm152,0H192V142.13l24,14.4Z"/></svg>`;
    }
}