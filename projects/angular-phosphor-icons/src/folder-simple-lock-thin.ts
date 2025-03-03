import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[folder-simple-lock-thin]',
  standalone: true,
})
export class UiIconFolderSimpleLockThin {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M112,208H40a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6l27.74,20.8a8,8,0,0,0,4.8,1.6H216a8,8,0,0,1,8,8v16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><rect x="152" y="168" width="72" height="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/><path d="M168,168V156a20,20,0,0,1,40,0v12" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/></svg>`;
    }
}