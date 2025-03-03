import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[money-duotone]',
  standalone: true,
})
export class UiIconMoneyDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="32" opacity="0.2"/><path d="M240,64H200a48.85,48.85,0,0,0,40,40Z" opacity="0.2"/><path d="M240,192V152a48.85,48.85,0,0,0-40,40Z" opacity="0.2"/><path d="M16,192V152a48.85,48.85,0,0,1,40,40Z" opacity="0.2"/><path d="M16,64v40A48.85,48.85,0,0,0,56,64Z" opacity="0.2"/><circle cx="128" cy="128" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="16" y="64" width="224" height="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M240,104a48.85,48.85,0,0,1-40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M200,192a48.85,48.85,0,0,1,40-40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M16,152a48.85,48.85,0,0,1,40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M56,64a48.85,48.85,0,0,1-40,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}