import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth/auth.service';

@Component({
  selector: 'app-global-login',
  templateUrl: './global-login.component.html',
  styleUrls: ['./global-login.component.css']
})
export class GlobalLoginComponent implements OnInit {

  public user = this.authService.user;

  public isLogged$ = this.authService.isLogged$;

  minutes = 1;
  gender = 'male';

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignIn() {
    this.authService.doGoogleLogin().then();
  }

  onSignOut() {
    this.authService.doLogOut();
  }
}
