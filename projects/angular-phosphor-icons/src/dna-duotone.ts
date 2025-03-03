import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[dna-duotone]',
  standalone: true,
})
export class UiIconDnaDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M64,208v-3.5a72,72,0,0,1,39.8-64.4l48.4-24.2A72,72,0,0,0,192,51.5V48H64v3.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V208Z" opacity="0.2"/><line x1="96" y1="48" x2="192" y2="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M64,24V51.5a72,72,0,0,0,39.8,64.4l48.4,24.2A72,72,0,0,1,192,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="64" y1="208" x2="160" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="107.89" y1="80" x2="186.12" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="69.88" y1="176" x2="148.11" y2="176" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M93.38,146.47A72,72,0,0,0,64,204.5V232" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M192,24V51.5a72,72,0,0,1-29.38,58" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}