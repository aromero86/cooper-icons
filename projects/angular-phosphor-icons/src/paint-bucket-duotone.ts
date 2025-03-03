import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[paint-bucket-duotone]',
  standalone: true,
})
export class UiIconPaintBucketDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M248,208a16,16,0,0,1-32,0c0-16,16-40,16-40S248,192,248,208Z" opacity="0.2"/><path d="M116.52,16,20.69,111.83a16,16,0,0,0,0,22.63l84.85,84.85a16,16,0,0,0,22.63,0L208,139.48l24-8Zm21.62,114.14a20,20,0,1,1,0-28.28A20,20,0,0,1,138.14,130.14Z" opacity="0.2"/><path d="M248,208a16,16,0,0,1-32,0c0-16,16-40,16-40S248,192,248,208Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M208,139.48l-79.83,79.83a16,16,0,0,1-22.63,0L20.69,134.46a16,16,0,0,1,0-22.63L116.52,16,232,131.48Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="124" cy="116" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="109.86" y1="101.86" x2="39.99" y2="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}