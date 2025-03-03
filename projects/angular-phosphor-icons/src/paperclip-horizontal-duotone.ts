import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[paperclip-horizontal-duotone]',
  standalone: true,
})
export class UiIconPaperclipHorizontalDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M192,80H80v32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96Z" opacity="0.2"/><path d="M80,144H192a16,16,0,0,0,0-32H48a32,32,0,0,0,0,64H192a48,48,0,0,0,0-96H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}