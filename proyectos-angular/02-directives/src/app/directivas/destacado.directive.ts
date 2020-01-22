import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appDestacado]'
})
export class DestacadoDirective implements OnInit {

  @Input('appDestacado') userColor: string;

  constructor(private el: ElementRef) {

  }

  ngOnInit(): void {
    const nativeElement = this.el.nativeElement;
    nativeElement.style.fontSize = '28px';
    nativeElement.style.color = this.userColor || 'red';
    nativeElement.style.textAlign = 'center';
    nativeElement.style.border = '2px solid ' + (this.userColor || 'red');
  }
}
