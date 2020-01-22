import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
    <p [ngStyle]="{'font-size': tam + 'px'}">
      Probando ngStyle...
    </p>
    <button id="plusButton" class="btn btn-primary" (click)="tam = tam + 10">
      <i class="fa fa-plus"></i></button>
    <button id="minusButton" class="btn btn-primary" (click)="tam = tam - 10">
      <i class="fa fa-minus"></i></button>

  `,
  styles: []
})
export class NgStyleComponent implements OnInit {

  tam: number = 15;

  constructor() {
  }

  ngOnInit() {
  }

}
