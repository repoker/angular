import { Component, OnInit } from '@angular/core';
import {StateService} from '../state.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private stateService: StateService) {    this.stateService = stateService;  }

  ngOnInit() {
  }

}