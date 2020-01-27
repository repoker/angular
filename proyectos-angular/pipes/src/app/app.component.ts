import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //title = 'pipes';
  nombre = 'Lucas';
  miArray = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  ratio = 0.234;
  sueldo = 1234.5;
}
