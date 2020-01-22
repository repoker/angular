import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  frase: any = {
    autor: 'Homer Simpson',
    mensaje: 'Tendrá todo el dinero del mundo, pero hay algo que jamás podrá comprar: un dinosaurio'
  };

  mostrar = false;

  colores: string[] = ['green', 'red', 'blue', 'brown', 'white'];

  constructor() {
  }

  ngOnInit() {
  }

  toggleButton() {
    this.mostrar = !this.mostrar;
  }

  randomizeColors() {

    var currentIndex = this.colores.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = this.colores[currentIndex];
      this.colores[currentIndex] = this.colores[randomIndex];
      this.colores[randomIndex] = temporaryValue;
    }
  }
}
