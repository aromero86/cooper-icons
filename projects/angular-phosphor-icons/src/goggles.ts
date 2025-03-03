import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[goggles]',
  standalone: true,
})
export class UiIconGoggles {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="104" y1="152" x2="152" y2="152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M232,152c0,17.67-30.33,32-48,32a32,32,0,0,1,0-64C201.67,120,232,134.33,232,152Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M104,152a32,32,0,0,1-32,32c-17.67,0-48-14.33-48-32s30.33-32,48-32A32,32,0,0,1,104,152Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="165.73" y1="125.73" x2="214.63" y2="174.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="46.59" y1="126.59" x2="94.63" y2="174.63" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M232,152h0a16,16,0,0,0,16-16h0a64,64,0,0,0-64-64H72A64,64,0,0,0,8,136H8a16,16,0,0,0,16,16h0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}