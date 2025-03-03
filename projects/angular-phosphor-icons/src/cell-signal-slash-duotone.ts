import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cell-signal-slash-duotone]',
  standalone: true,
})
export class UiIconCellSignalSlashDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M200,200a8,8,0,0,1-8,8H32a8,8,0,0,1-5.66-13.66l160-160A8,8,0,0,1,200,40Z" opacity="0.2"/><line x1="48" y1="40" x2="208" y2="216" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M133.84,86.86l52.5-52.5A8,8,0,0,1,200,40V159.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M198.13,205.14A8,8,0,0,1,192,208H32a8,8,0,0,1-5.66-13.66l84.83-84.83" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}