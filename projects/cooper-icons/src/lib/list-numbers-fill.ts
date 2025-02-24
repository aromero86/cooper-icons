import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[list-numbers-fill]',
  standalone: true,
})
export class UiIconListNumbersFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM56.84,75.58a8,8,0,0,1,3.58-10.74l16-8A8,8,0,0,1,88,64v48a8,8,0,0,1-16,0V76.94l-4.42,2.22A8,8,0,0,1,56.84,75.58ZM92,180a8,8,0,0,1,0,16H68a8,8,0,0,1-6.4-12.8l21.67-28.89A3.92,3.92,0,0,0,84,152a4,4,0,0,0-7.77-1.33,8,8,0,0,1-15.09-5.34,20,20,0,1,1,35,18.53L84,180Zm100,4H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Zm0-48H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Zm0-48H120a8,8,0,0,1,0-16h72a8,8,0,0,1,0,16Z"/></svg>`;
    }
}