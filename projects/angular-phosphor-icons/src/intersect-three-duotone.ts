import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[intersect-three-duotone]',
  standalone: true,
})
export class UiIconIntersectThreeDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,108a60.06,60.06,0,0,0-59.36-7.28,60,60,0,0,0,36,46.56A59.94,59.94,0,0,1,128,108Z" opacity="0.2"/><path d="M104.64,147.28A60,60,0,0,0,128,204a60,60,0,0,0,23.36-56.72,60.17,60.17,0,0,1-46.72,0Z" opacity="0.2"/><path d="M187.36,100.72A60.06,60.06,0,0,0,128,108a59.94,59.94,0,0,1,23.36,39.28A60,60,0,0,0,187.36,100.72Z" opacity="0.2"/><circle cx="128" cy="92" r="60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="164" cy="156" r="60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="92" cy="156" r="60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}