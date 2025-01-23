import { Directive, ElementRef, OnChanges, SimpleChanges,Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective implements OnChanges {
  @Input()
  appHighlight = 'yellow';
  
  @Input()
  bolder = false;



  constructor(private elementRef:ElementRef) {
  }
   ngOnChanges(changes: SimpleChanges): void {
    if(changes['bolder']) { this.updateFontWeight() }
  }
  updateFontWeight(){
    this.elementRef.nativeElement.style.fontWeight = this.bolder ? 'bolder' : 'normal'
  }
  }
