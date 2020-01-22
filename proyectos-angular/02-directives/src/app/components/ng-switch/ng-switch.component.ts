import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: []
})
export class NgSwitchComponent implements OnInit {

  mensaje = 'info';

  constructor() {
  }

  ngOnInit() {
  }

  change() {

    let meh = (Math.random() * 4));Math.floor(y/x);
  v

    if (meh % 3 == 0) {
      this.mensaje = 'success';
    }
    /*
    else if () {
      this.mensaje = 'info';
    }
    */
  }
}
