import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[matrix-logo-fill]',
  standalone: true,
})
export class UiIconMatrixLogoFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,200H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H72V184h8a8,8,0,0,1,0,16Zm80-40a8,8,0,0,1-8-8V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.65A23.94,23.94,0,0,1,128,102.13,24,24,0,0,1,168,120v32A8,8,0,0,1,160,160Zm40,32a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V72h-8a8,8,0,0,1,0-16h16a8,8,0,0,1,8,8Z"/></svg>`;
    }
}