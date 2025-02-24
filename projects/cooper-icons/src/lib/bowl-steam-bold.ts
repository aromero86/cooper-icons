import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[bowl-steam-bold]',
  standalone: true,
})
export class UiIconBowlSteamBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M88,207.3A96,96,0,0,1,32,120H224a96,96,0,0,1-56,87.3V216a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M172,84s-18-5.2,0-26,0-26,0-26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M128,84s-18-5.2,0-26,0-26,0-26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M84,84s-18-5.2,0-26,0-26,0-26" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}