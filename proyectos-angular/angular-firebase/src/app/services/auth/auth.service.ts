import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user = new BehaviorSubject(null);

  private isLogged = new BehaviorSubject(false);
  public isLogged$ = this.isLogged.asObservable();

  constructor(private afAuth: AngularFireAuth, private router: Router) {}

  async doGoogleLogin() {
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    return this.afAuth.auth.signInWithPopup(provider).then(res => {
      console.log(res);
      this.user.next(res.user);
      this.isLogged.next(true);
      this.router.navigateByUrl('/user');
    });
  }

  async doLogOut() {
    return this.afAuth.auth.signOut().then(() => {
      this.user.next(null);
      this.isLogged.next(false);
    });
  }
}
