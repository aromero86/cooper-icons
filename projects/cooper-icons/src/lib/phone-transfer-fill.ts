import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[phone-transfer-fill]',
  standalone: true,
})
export class UiIconPhoneTransferFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M136,72a8,8,0,0,1,8-8h52.69L178.34,45.66a8,8,0,0,1,11.32-11.32l32,32a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L196.69,80H144A8,8,0,0,1,136,72Zm78.36,94.46-47.11-21.11-.11-.06a16,16,0,0,0-15.18,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.51A56.24,56.24,0,0,0,24,88c0,79.4,64.6,144,144,144a56.24,56.24,0,0,0,55.87-48.92A16,16,0,0,0,214.36,166.46Z"/></svg>`;
    }
}