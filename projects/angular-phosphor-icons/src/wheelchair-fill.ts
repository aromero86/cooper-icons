import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[wheelchair-fill]',
  standalone: true,
})
export class UiIconWheelchairFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M250.53,199.59l-24,8a8,8,0,0,1-9.69-4L187.05,144H104a8,8,0,0,1-8-8V106.34A56,56,0,0,0,112,216c25.91,0,50.09-18.05,56.25-42a8,8,0,1,1,15.5,4c-8.06,31.3-38.23,54-71.75,54A72,72,0,0,1,96,89.81v-19a28,28,0,1,1,16,0V88h56a8,8,0,0,1,0,16H112v24h80a8,8,0,0,1,7.15,4.42l28.9,57.8,17.42-5.81a8,8,0,0,1,5.06,15.18Z"/></svg>`;
    }
}