import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class MyhttpService {
  readonly baseURL = 'https://api.myjson.com/bins/zyni3';

  constructor(private httpClient: HttpClient) {
  }

  getSavedGame() {
    return this.httpClient.get(this.baseURL);
  }
}
