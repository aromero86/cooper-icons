import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[list-dashes-fill]',
  standalone: true,
})
export class UiIconListDashesFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,184H64a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm0-48H64a8,8,0,0,1,0-16h8a8,8,0,0,1,0,16Zm120,96H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Zm0-48H104a8,8,0,0,1,0-16h88a8,8,0,0,1,0,16Z"/></svg>`;
    }
}