import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[discord-logo-bold]',
  standalone: true,
})
export class UiIconDiscordLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="92" cy="136" r="16"/><circle cx="164" cy="136" r="16"/><path d="M151.47,81.43l6.95-27.37a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37a8,8,0,0,1-4.55,9.24l-67,29.7a8.15,8.15,0,0,1-11-4.56L145.61,179.2" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M104.53,81.43l-7-27.37a8.1,8.1,0,0,0-9.21-6L52.31,54A8.08,8.08,0,0,0,45.77,60L16.24,176.35a8,8,0,0,0,4.55,9.24l67,29.7a8.15,8.15,0,0,0,11-4.56l11.64-31.53" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M84,85.24A181.44,181.44,0,0,1,128,80a181.44,181.44,0,0,1,44,5.24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M172,174.76A181.44,181.44,0,0,1,128,180a181.44,181.44,0,0,1-44-5.24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}