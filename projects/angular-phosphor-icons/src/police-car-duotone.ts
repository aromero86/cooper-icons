import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[police-car-duotone]',
  standalone: true,
})
export class UiIconPoliceCarDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,176v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176Z" opacity="0.2"/><path d="M72,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176Z" opacity="0.2"/><path d="M224,112,194.3,60a8,8,0,0,0-6.94-4H68.64a8,8,0,0,0-6.94,4L32,112Z" opacity="0.2"/><line x1="16" y1="112" x2="240" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,176v24a8,8,0,0,1-8,8H192a8,8,0,0,1-8-8V176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M72,176v24a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="144" x2="80" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="144" x2="192" y2="144" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M224,112,194.3,60a8,8,0,0,0-6.94-4H68.64a8,8,0,0,0-6.94,4L32,112v64H224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="24" x2="152" y2="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}