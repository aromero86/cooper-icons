import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cell-signal-slash-fill]',
  standalone: true,
})
export class UiIconCellSignalSlashFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M213.38,221.92a8,8,0,0,1-11.3-.54l-5.51-6.06A16.11,16.11,0,0,1,192,216H32a16,16,0,0,1-15.06-10.59,16.4,16.4,0,0,1,4.07-17l79.13-79.12L42.26,45.62a8.22,8.22,0,0,1,.14-11.38,8,8,0,0,1,11.48.37l160,176A8,8,0,0,1,213.38,221.92ZM201,172.66a4,4,0,0,0,7-2.69V40a16,16,0,0,0-27.32-11.32l-55.21,55.2a4,4,0,0,0-.13,5.52Z"/></svg>`;
    }
}