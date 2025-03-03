import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[patreon-logo-bold]',
  standalone: true,
})
export class UiIconPatreonLogoBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}