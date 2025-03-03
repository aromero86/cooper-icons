import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[beach-ball-duotone]',
  standalone: true,
})
export class UiIconBeachBallDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M79.26,45.27a96.4,96.4,0,0,1,68.68-11.2,191.91,191.91,0,0,1,13.29,59.29A191.07,191.07,0,0,0,79.26,45.27Z" opacity="0.2"/><path d="M210.73,176.73a191,191,0,0,0-48.09-82,192.2,192.2,0,0,1,59.29,13.29,96.37,96.37,0,0,1-11.2,68.67Z" opacity="0.2"/><path d="M161.31,94.69a191.56,191.56,0,0,1-40.5,129,96,96,0,0,1-88.54-88.54A191.56,191.56,0,0,1,161.31,94.69Z" opacity="0.2"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M147.93,34.08a192.17,192.17,0,0,1-27.12,189.65" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M32.27,135.19a192.17,192.17,0,0,1,189.65-27.12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M79.25,45.27a191.14,191.14,0,0,1,82.69,48.79,191.14,191.14,0,0,1,48.79,82.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}