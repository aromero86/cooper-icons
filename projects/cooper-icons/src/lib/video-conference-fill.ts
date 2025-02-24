import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[video-conference-fill]',
  standalone: true,
})
export class UiIconVideoConferenceFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M204,88a12,12,0,1,1-12-12A12,12,0,0,1,204,88Zm-12,68a12,12,0,1,0,12,12A12,12,0,0,0,192,156ZM96,104a16,16,0,1,0,16,16A16,16,0,0,0,96,104ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-64,64h48V56H168Zm-32.25,46a39.76,39.76,0,0,0-17.19-23.34,32,32,0,1,0-45.12,0A39.84,39.84,0,0,0,56.25,166a8,8,0,0,0,15.5,4c2.64-10.25,13.06-18,24.25-18s21.62,7.73,24.25,18a8,8,0,1,0,15.5-4ZM216,200V136H168v64h48Z"/></svg>`;
    }
}