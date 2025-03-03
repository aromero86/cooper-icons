import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[hands-clapping-bold]',
  standalone: true,
})
export class UiIconHandsClappingBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M83.54,87,77.81,77A18,18,0,1,0,46.63,95l19,32.91" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M109.55,132l-26-45a18,18,0,1,1,31.17-18l36.45,63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M102,47,96.28,37A18,18,0,1,0,65.1,55L77.81,77" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M114.71,69,102,47a18,18,0,1,1,31.17-18l37,64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M199,175.76a72,72,0,0,0,10.7-86.19L188.61,53a18,18,0,0,0-31.18,18" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M81.81,156,61.59,121a18,18,0,1,0-31.18,18L40,155.59,65.63,200a72,72,0,0,0,124.71-72l-20.2-35A18,18,0,1,0,139,111" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}