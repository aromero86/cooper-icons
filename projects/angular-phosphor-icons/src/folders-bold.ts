import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[folders-bold]',
  standalone: true,
})
export class UiIconFoldersBold {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M196,116v88.89a7.11,7.11,0,0,1-7.11,7.11H36a8,8,0,0,1-8-8V92a8,8,0,0,1,8-8H81.33a8,8,0,0,1,4.8,1.6L116,108h72A8,8,0,0,1,196,116Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/><path d="M68,84V52a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L156,68h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H196" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/></svg>`;
    }
}