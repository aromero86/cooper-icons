import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[flag-checkered-duotone]',
  standalone: true,
})
export class UiIconFlagCheckeredDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M168,129.48c17.76,4.91,36.1,3.75,56-13.48V56c-19.89,17.23-38.24,18.39-56,13.48Z" opacity="0.2"/><path d="M104,162.52c21.62,6,42.38,21,64,27v-60c-21.63-6-42.38-21-64-27Z" opacity="0.2"/><path d="M48,116c19.89-17.23,38.24-18.39,56-13.48v-60C86.24,37.61,67.89,38.77,48,56Z" opacity="0.2"/><line x1="168" y1="69.48" x2="168" y2="189.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,116c64-55.43,112,55.43,176,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="104" y1="42.52" x2="104" y2="162.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56V224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}