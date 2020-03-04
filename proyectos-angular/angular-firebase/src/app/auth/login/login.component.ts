import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = this.authService.user;
  public isLogged$ = this.authService.isLogged$;

  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

  onSignIn() {
    this.authService.doGoogleLogin();
  }

  onSignOut() {
    this.authService.doLogout();
  }
}
