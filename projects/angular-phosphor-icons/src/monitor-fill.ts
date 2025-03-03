import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[monitor-fill]',
  standalone: true,
})
export class UiIconMonitorFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="24" y="40" width="208" height="160" rx="24"/><path d="M160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z"/></svg>`;
    }
}