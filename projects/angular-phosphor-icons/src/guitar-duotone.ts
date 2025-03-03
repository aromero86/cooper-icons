import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[guitar-duotone]',
  standalone: true,
})
export class UiIconGuitarDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M155.2,100.8c-23-23-55.57-27.63-72.8-10.4a34.21,34.21,0,0,0-7.61,11.66,16.23,16.23,0,0,1-14.72,10C48,112.44,37,116.61,28.8,124.8,7.6,146,13.33,186.12,41.6,214.4s68.39,34,89.6,12.8C139.39,219,143.56,208,144,195.93a16.23,16.23,0,0,1,10-14.72,34.21,34.21,0,0,0,11.66-7.61C182.83,156.37,178.17,123.78,155.2,100.8ZM112,168a24,24,0,1,1,24-24A24,24,0,0,1,112,168Z" opacity="0.2"/><line x1="204" y1="12" x2="244" y2="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="176" y1="56" x2="200" y2="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M60.07,112a16.23,16.23,0,0,0,14.72-10A34.21,34.21,0,0,1,82.4,90.4c17.23-17.23,49.82-12.57,72.8,10.4s27.63,55.57,10.4,72.8a34.21,34.21,0,0,1-11.66,7.61,16.23,16.23,0,0,0-10,14.72C143.56,208,139.39,219,131.2,227.2,110,248.4,69.88,242.67,41.6,214.4S7.6,146,28.8,124.8C37,116.61,48,112.44,60.07,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56" y1="168" x2="88" y2="200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="112" cy="144" r="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="112" y1="120" x2="212" y2="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="136" y1="144" x2="236" y2="44" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}