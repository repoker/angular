import { Component } from '@angular/core';
import { AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit, DoCheck, OnChanges,
  OnDestroy, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck,
AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
  {
  title = 'ciclo-vida';
  mostrar = false;

  constructor() {
    console.log('constructor');
  }

  ngOnInit() { console.log('ngOnInit'); }
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
  }
  ngDoCheck() { console.log('ngDoCheck'); }
  ngAfterContentInit() { console.log('ngAfterContentInit'); }
  ngAfterContentChecked() { console.log('ngAfterContentChecked'); }
  ngAfterViewInit() { console.log('ngAfterViewInit'); }
  ngAfterViewChecked() { console.log('ngAfterViewChecked'); }
  ngOnDestroy() { console.log('ngOnDestroy'); }
}
