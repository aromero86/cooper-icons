import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'ui-icon[cloud-sun-duotone]',
  standalone: true,
})
export class UiIconCloudSunDuotone {

    constructor(private el: ElementRef, private renderer: Renderer2) {
        this.el.nativeElement.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M59.66,135.35a44.08,44.08,0,0,1,38.54-5v.11a68.22,68.22,0,0,1,41.65-46v0a48,48,0,1,0-80.19,50.94Z" opacity="0.2"/><line x1="87.66" y1="56.73" x2="83.5" y2="33.09" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="56.69" y1="76.46" x2="37.03" y2="62.69" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="48.73" y1="112.31" x2="25.09" y2="116.48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="123.52" y1="64.69" x2="137.28" y2="45.03" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M96,144a68.06,68.06,0,1,1,68,72H84a44,44,0,1,1,14.2-85.66" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M59.65,135.35a48,48,0,1,1,80.19-50.94" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>`;
    }
}