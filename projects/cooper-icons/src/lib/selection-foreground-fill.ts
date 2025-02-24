import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[selection-foreground-fill]',
  standalone: true,
})
export class UiIconSelectionForegroundFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,200H72a16,16,0,0,1-16-16V168a8,8,0,0,1,16,0v16H88a8,8,0,0,1,0,16Zm0-88H72v16a8,8,0,0,1-16,0V112A16,16,0,0,1,72,96H88a8,8,0,0,1,0,16Zm72,72a16,16,0,0,1-16,16H128a8,8,0,0,1,0-16h16V168a8,8,0,0,1,16,0Zm0-56a8,8,0,0,1-16,0V112H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16Zm40,16a16,16,0,0,1-16,16,8,8,0,0,1,0-16h0V72H112a8,8,0,0,1-16,0,16,16,0,0,1,16-16h72a16,16,0,0,1,16,16Z"/></svg>`;
    }
}