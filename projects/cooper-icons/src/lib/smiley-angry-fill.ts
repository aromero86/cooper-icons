import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[smiley-angry-fill]',
  standalone: true,
})
export class UiIconSmileyAngryFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM80,140a12,12,0,1,1,12,12A12,12,0,0,1,80,140Zm78.66,48.43a8,8,0,0,1-11.09,2.23C141.07,186.34,136,184,128,184s-13.07,2.34-19.57,6.66a8,8,0,0,1-8.86-13.32C108,171.73,116.06,168,128,168s20,3.73,28.43,9.34A8,8,0,0,1,158.66,188.43ZM164,152a12,12,0,1,1,12-12A12,12,0,0,1,164,152Zm16.44-57.34-48,32a8,8,0,0,1-8.88,0l-48-32a8,8,0,1,1,8.88-13.32L128,110.39l43.56-29a8,8,0,0,1,8.88,13.32Z"/></svg>`;
    }
}