import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[gif-fill]',
  standalone: true,
})
export class UiIconGifFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,144a32,32,0,0,1-64,0V112a32,32,0,0,1,55.85-21.33,8,8,0,1,1-11.92,10.66A16,16,0,0,0,64,112v32a16,16,0,0,0,32,0v-8H88a8,8,0,0,1,0-16h16a8,8,0,0,1,8,8Zm32,24a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm60-72H176v24h20a8,8,0,0,1,0,16H176v32a8,8,0,0,1-16,0V88a8,8,0,0,1,8-8h36a8,8,0,0,1,0,16Z"/></svg>`;
    }
}