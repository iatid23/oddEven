import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appHighLightRenderer]',
})
export class HighlightRendererDirective implements OnInit {

    constructor(private renderer: Renderer2, private elementRef: ElementRef){}

    ngOnInit(): void {
        //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    }

    @HostListener('mouseenter') mouseover(event: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    }

    @HostListener('mouseout') mouseoout (event: Event) {
        this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    }

}