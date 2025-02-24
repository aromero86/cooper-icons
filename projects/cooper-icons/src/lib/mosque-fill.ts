import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[mosque-fill]',
  standalone: true,
})
export class UiIconMosqueFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,128a23.84,23.84,0,0,0-8,1.38V128c0-41.78-31.07-62.46-53.76-77.56C148.16,41.06,136,33,136,24a8,8,0,0,0-16,0c0,9-12.16,17.06-26.24,26.44C71.07,65.54,40,86.22,40,128v1.38A24,24,0,0,0,8,152v56a8,8,0,0,0,8,8H72a8,8,0,0,0,8-8V176a16,16,0,0,1,32,0v32a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V176a16,16,0,0,1,32,0v32a8,8,0,0,0,8,8h56a8,8,0,0,0,8-8V152A24,24,0,0,0,224,128ZM40,200H24V152a8,8,0,0,1,16,0Zm192,0H216V152a8,8,0,0,1,16,0Z"/></svg>`;
    }
}