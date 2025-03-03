import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flip-horizontal-fill]',
  standalone: true,
})
export class UiIconFlipHorizontalFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M120,40V200a16,16,0,0,1-16,16H40a16,16,0,0,1-14.78-22.15l64-159.93.06-.14A16,16,0,0,1,120,40ZM229.33,208.84A16,16,0,0,1,216,216H152a16,16,0,0,1-16-16V40a16,16,0,0,1,30.74-6.23l.06.14,64,159.93A16,16,0,0,1,229.33,208.84ZM216,200l-.06-.15L152,40V200Z"/></svg>`;
    }
}