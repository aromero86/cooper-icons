import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wrench-bold]',
  standalone: true,
})
export class UiIconWrenchBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M73,217A24,24,0,0,1,39,183l63.77-58.28A64,64,0,0,1,184,36.65L144,80l5.66,26.34L176,112l43.35-40a64,64,0,0,1-88.1,81.2Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}