import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public user = new BehaviorSubject(null)

  constructor(private angularFireAuth: AngularFireAuth) {}

  doGoogleLogin() {
    return new Promise<any>((resolve, reject) => {
      const provider = new firebase.auth.GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      this.angularFireAuth.auth.signInWithPopup(provider).then(res => {
        console.log(res)
        this.user.next(res.user)
        resolve(res)
      })
    })
  }

  doLogout() {
    this.user.next(null)
    console.log('logging out...')
  }
}
