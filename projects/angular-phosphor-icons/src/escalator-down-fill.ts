import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[escalator-down-fill]',
  standalone: true,
})
export class UiIconEscalatorDownFill {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M170.34,85.66a8,8,0,0,1,11.32-11.32L192,84.69V48a8,8,0,0,1,16,0V84.69l10.34-10.35a8,8,0,0,1,11.32,11.32l-24,24a8,8,0,0,1-11.32,0ZM224,144H187.5L93.88,42.57A8,8,0,0,0,88,40H32A16,16,0,0,0,16,56V96a16,16,0,0,0,16,16H68.5l93.62,101.43A8,8,0,0,0,168,216h56a16,16,0,0,0,16-16V160A16,16,0,0,0,224,144Z"/></svg>`;
    }
}