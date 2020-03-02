import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user = this.authService.user;

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  signIn() {
    this.authService.doGoogleLogin();
  }

  signOut() {
    this.authService.doLogout();
  }
}
