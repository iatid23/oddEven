import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective implements OnInit{

  @Input() defColor: string = 'transparent';
  @Input() HLColor: string = 'transparent';
  @HostBinding('style.backgroundColor') backgroundColor: string = this.HLColor;

  constructor() { }

  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = this.HLColor;
}

@HostListener('mouseout') mouseoout (event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.defColor;
}


}
