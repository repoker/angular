import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase'
import { BehaviorSubject } from 'rxjs'
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public user = new BehaviorSubject(null);

  private isLogged = new BehaviorSubject(false);

  public isLogged$ = this.isLogged.asObservable();

  constructor(private angularFireAuth: AngularFireAuth, private router : Router) {}

  async doGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    provider.addScope('profile')
    provider.addScope('email')
    return this.angularFireAuth.auth.signInWithPopup(provider).then(res => {
      console.log(res.user);
      this.user.next(res.user);
      this.isLogged.next(true);
      this.router.navigateByUrl('/user');
    })
  }

  async doLogout() {
    return this.angularFireAuth.auth.signOut().then(() => {
      this.user.next(null);
      this.isLogged.next(false);
    })
  }
}
