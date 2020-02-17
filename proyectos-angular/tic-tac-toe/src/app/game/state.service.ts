import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface State {
  turno: string;
  valores: string[][];
}

@Injectable({
  providedIn: 'root'
})
export class StateService {
  // tslint:disable-next-line:variable-name
  private _state$: BehaviorSubject<State>;
  constructor() {
    this._state$ = new BehaviorSubject({
      turno: 'PLAYERX',
      valores: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]    });
  }
  get state$(): BehaviorSubject<State> {
    return this._state$;
  }

  get state(): State {
    return this._state$.getValue();
  }
  set state(state: State) {
    this._state$.next(state);
  }

  updateValue(row, col) {
    if (this.state.valores[row][col] === '-') {
      const newValue = this.state.turno === 'PLAYERX' ? 'X' : '0';
      const newTurn = this.state.turno === 'PLAYERX' ? 'PLAYER0' :  'PLAYERX';
      this.state.valores[row][col] = newValue;
      this.state.turno = newTurn;
    }
  }

  reset() {
    this.state = {
      turno: 'PLAYERX',
      valores: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    };
  }

}
