import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[towel-duotone]',
  standalone: true,
})
export class UiIconTowelDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M56,192H184v24a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8Z" opacity="0.2"/><path d="M216,152V48a16,16,0,0,0-16-16h0a16,16,0,0,0-16,16V216a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V48A16,16,0,0,1,72,32H200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="192" x2="184" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}