import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective implements OnInit{
  @HostBinding('style.backgroundColor') backgroundColor: string = 'purple';

  constructor() { }

  ngOnInit(): void {
    
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.backgroundColor = 'blue';
}

@HostListener('mouseout') mouseoout (event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'yellow';
}


}
