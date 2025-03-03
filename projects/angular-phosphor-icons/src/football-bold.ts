import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[football-bold]',
  standalone: true,
})
export class UiIconFootballBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M186.54,186.54c-43,43-102.66,39.55-131.35,34.69a24.92,24.92,0,0,1-20.42-20.42c-4.86-28.69-8.29-88.37,34.69-131.35S172.12,29.91,200.81,34.77a24.92,24.92,0,0,1,20.42,20.42C226.09,83.88,229.52,143.56,186.54,186.54Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="100" y1="128" x2="128" y2="156" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="128" y1="100" x2="156" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="156" y1="100" x2="100" y2="156" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="145.45" y1="33.45" x2="222.55" y2="110.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><line x1="33.45" y1="145.45" x2="110.55" y2="222.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}