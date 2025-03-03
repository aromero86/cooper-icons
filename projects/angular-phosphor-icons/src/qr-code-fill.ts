import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[qr-code-fill]',
  standalone: true,
})
export class UiIconQrCodeFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="40" y="40" width="80" height="80" rx="16"/><rect x="40" y="136" width="80" height="80" rx="16"/><rect x="136" y="40" width="80" height="80" rx="16"/><path d="M144,184a8,8,0,0,0,8-8V144a8,8,0,0,0-16,0v32A8,8,0,0,0,144,184Z"/><path d="M208,152H184v-8a8,8,0,0,0-16,0v56H144a8,8,0,0,0,0,16h32a8,8,0,0,0,8-8V168h24a8,8,0,0,0,0-16Z"/><path d="M208,184a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V192A8,8,0,0,0,208,184Z"/></svg>`;
    }
}