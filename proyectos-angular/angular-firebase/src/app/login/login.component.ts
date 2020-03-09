import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user = this.authService.user;
  public isLogged$ = this.authService.isLogged$;
  public age = 34;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  onSignIn() {
    debugger;
    console.log('antes', this.age);
    this.age = this.age + 1;
    console.log('despues', this.age);

    this.authService.doGoogleLogin().then();
  }

  onSignOut() {
    this.authService.doLogOut();
  }
}
