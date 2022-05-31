import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }
  
  
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'red';

  }



}
