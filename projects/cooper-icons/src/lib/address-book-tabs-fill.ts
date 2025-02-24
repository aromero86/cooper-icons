import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[address-book-tabs-fill]',
  standalone: true,
})
export class UiIconAddressBookTabsFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,48h24V88H184Zm0,56h24v48H184Zm-38,71.75a8,8,0,0,1-9.74-5.76c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,0,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,151.75,166,8,8,0,0,1,146,175.75ZM208,208H184V168h24v40Zm-80-88a16,16,0,1,1-16-16A16,16,0,0,1,128,120Z"/></svg>`;
    }
}