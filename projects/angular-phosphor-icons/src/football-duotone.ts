import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[football-duotone]',
  standalone: true,
})
export class UiIconFootballDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M33.45,145.45c3.32-25.24,13-53,36-76s50.75-32.69,76-36h0l77.1,77.1h0c-3.32,25.24-13,53-36,76s-50.75,32.69-76,36h0l-77.1-77.1Z" opacity="0.2"/><path d="M186.54,186.54c-43,43-102.66,39.55-131.35,34.69a24.92,24.92,0,0,1-20.42-20.42c-4.86-28.69-8.29-88.37,34.69-131.35S172.12,29.91,200.81,34.77a24.92,24.92,0,0,1,20.42,20.42C226.09,83.88,229.52,143.56,186.54,186.54Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="128" x2="128" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="104" x2="152" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="160" y1="96" x2="96" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="145.45" y1="33.45" x2="222.55" y2="110.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="33.45" y1="145.45" x2="110.55" y2="222.55" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}