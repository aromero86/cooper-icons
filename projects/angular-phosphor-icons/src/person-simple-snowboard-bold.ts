import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[person-simple-snowboard-bold]',
  standalone: true,
})
export class UiIconPersonSimpleSnowboardBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M29.82,182l153.6,45.21A19.23,19.23,0,0,0,208,208.61h0A19.37,19.37,0,0,0,194.18,190L40.58,144.79A19.23,19.23,0,0,0,16,163.39h0A19.37,19.37,0,0,0,29.82,182Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><circle cx="168" cy="48" r="20" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="80" y1="80" x2="216" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><polyline points="109.71 127.43 160 142 138.74 173.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="131.28" y1="95.08" x2="88.7" y2="158.95" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}