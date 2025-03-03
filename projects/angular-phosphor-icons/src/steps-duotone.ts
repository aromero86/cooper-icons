import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[steps-duotone]',
  standalone: true,
})
export class UiIconStepsDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M224,200H72V152h56V104h56V56h56V184A16,16,0,0,1,224,200Z" opacity="0.2"/><polyline points="16 200 72 200 72 152 128 152 128 104 184 104 184 56 240 56" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}