import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[thermometer-cold-fill]',
  standalone: true,
})
export class UiIconThermometerColdFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM176,192a56,56,0,1,1-88-46V40a32,32,0,0,1,64,0V146A56.23,56.23,0,0,1,176,192Zm-95.18-8h78.36A40.16,40.16,0,0,0,140,157.35a8,8,0,0,1-4-6.93V40a16,16,0,0,0-32,0V150.42a8,8,0,0,1-4,6.93A40.16,40.16,0,0,0,80.82,184Z"/></svg>`;
    }
}