import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wallet-bold]',
  standalone: true,
})
export class UiIconWalletBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="180" cy="136" r="16"/><path d="M40,60.73V180a20,20,0,0,0,20,20H204a20,20,0,0,0,20-20V100a20,20,0,0,0-20-20H60.48C49.63,80,40.4,71.57,40,60.73A20,20,0,0,1,60,40H192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}