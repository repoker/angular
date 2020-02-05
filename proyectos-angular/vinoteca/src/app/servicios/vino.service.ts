import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vino} from '../modelos/vino';
import {environment} from '../../environments/environment';

@Injectable(
  { providedIn: 'root' }
)
export class VinoService {

  readonly URL = environment.API_VINOS;
  readonly vinos: Vino[];

  constructor(private http: HttpClient) {
  }

  getVinos(): Observable<Vino[]> {
    return this.http.get<Vino[]>(this.URL);
  }
}
