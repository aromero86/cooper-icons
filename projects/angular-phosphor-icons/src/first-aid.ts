import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[first-aid]',
  standalone: true,
})
export class UiIconFirstAid {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M96,160H40a8,8,0,0,1-8-8V104a8,8,0,0,1,8-8H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8V96h56a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H160v56a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V160Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}