import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

export interface State {
  turno: string;
  valores: string[][];
  jugadas: number;
}

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private _state$: BehaviorSubject<State>;
  constructor() {
    this._state$ = new BehaviorSubject({
      turno: 'PLAYERX',
      valores:[
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ],
      jugadas: 0
    });

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
      const newTurn = this.state.turno === 'PLAYERX' ? 'PLAYER0' : 'PLAYERX';
      this.state.valores[row][col] = newValue;
      this.state.turno = newTurn;
      this.state.jugadas += 1;
      if (this.state.jugadas > 4) {
        this.ganador(row, col);
      }

      console.log(this.state.jugadas);
    }
  }

  ganador(row, col) {


    if (this.state.valores[row][0] === this.state.valores[row][1] && this.state.valores[row][1] === this.state.valores[row][2]) {
      this.state.turno = 'El ganador es: ' +  (this.state.turno === 'PLAYERX' ? 'PLAYER0' : 'PLAYERX');
    }

    if (this.state.valores[0][col] === this.state.valores[1][col] && this.state.valores[1][col] === this.state.valores[2][col]) {
      this.state.turno = 'El ganador es: ' +  (this.state.turno === 'PLAYERX' ? 'PLAYER0' : 'PLAYERX');
    }

    if (this.state.valores[2][2] !== '-' && this.state.valores[1][1] !== '-' && this.state.valores[0][0] !== '-' && this.state.valores[1][1] === this.state.valores[2][2] && this.state.valores[0][0] === this.state.valores[1][1]) {
      this.state.turno = 'El ganador es: ' +  (this.state.turno === 'PLAYERX' ? 'PLAYER0' : 'PLAYERX');
    }

    if (this.state.valores[0][2] !== '-' && this.state.valores[1][1] !== '-' && this.state.valores[2][0] !== '-' && this.state.valores[0][2] === this.state.valores[1][1] && this.state.valores[1][1] === this.state.valores[2][0]) {
      this.state.turno = 'El ganador es: ' +  (this.state.turno === 'PLAYERX' ? 'PLAYER0' : 'PLAYERX');
    }
  }

  reset() {
    this.state = {
      turno: 'PLAYERX',
      valores: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ],
      jugadas: 0
    };
  }

}
