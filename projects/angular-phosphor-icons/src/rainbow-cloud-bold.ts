import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[rainbow-cloud-bold]',
  standalone: true,
})
export class UiIconRainbowCloudBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M156,200c-13.25,0-24-11.14-24-24.89s10.75-24.89,24-24.89a23.33,23.33,0,0,1,8.81,1.73h0A40,40,0,1,1,204,200Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M92,176V160a20,20,0,0,1,7.74-15.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M52,176V160a60,60,0,0,1,90.83-51.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M12,176V160A100,100,0,0,1,177.59,84.52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}