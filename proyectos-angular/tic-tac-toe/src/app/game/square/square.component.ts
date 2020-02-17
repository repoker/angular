import {Component, Input, OnInit} from '@angular/core';
import {StateService} from '../state.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css']
})
export class SquareComponent implements OnInit {
  @Input() row: number;
  @Input() col: number;

  constructor(private stateService: StateService) {
  }

  ngOnInit() {
  }

  handleSquareClick() {
    console.log('Square click', this.row, this.col);
    this.stateService.updateValue(this.row, this.col);
  }
}
