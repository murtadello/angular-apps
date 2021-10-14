import { Directive, 
  OnInit , 
  ElementRef, 
  HostListener, 
  Renderer2, 
  HostBinding,
  Input} 
  from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent';
  @Input() hightlightColor: string = 'blue';

  @HostBinding ('style.backgroundColor') backgroundColor:string ;
  constructor(private elRef: ElementRef, private renderer: Renderer2) { 

  }
  ngOnInit(){
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');

  }
  @HostListener('mouseenter') mouseover(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor =this.hightlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor= this.defaultColor;
  }
}
