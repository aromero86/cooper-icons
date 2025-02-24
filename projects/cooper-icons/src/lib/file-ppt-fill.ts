import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[file-ppt-fill]',
  standalone: true,
})
export class UiIconFilePptFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,152.53a8.17,8.17,0,0,1-8.25,7.47H204v47.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V160H176.27a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h40A8,8,0,0,1,224,152.53ZM92,172.85C91.54,188.08,78.64,200,63.4,200H56v7.73A8.17,8.17,0,0,1,48.53,216,8,8,0,0,1,40,208V152a8,8,0,0,1,8-8H64A28,28,0,0,1,92,172.85Zm-16-2A12.25,12.25,0,0,0,63.65,160H56v24h8A12,12,0,0,0,76,170.84Zm84,2C159.54,188.08,146.64,200,131.4,200H124v7.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V152a8,8,0,0,1,8-8h16A28,28,0,0,1,160,172.85Zm-16-2A12.25,12.25,0,0,0,131.65,160H124v24h8A12,12,0,0,0,144,170.84ZM40,116V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v28a4,4,0,0,1-4,4H44A4,4,0,0,1,40,116ZM152,88h44L152,44Z"/></svg>`;
    }
}