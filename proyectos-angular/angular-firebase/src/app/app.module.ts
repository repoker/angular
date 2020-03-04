import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppComponent } from './app.component'
import { AngularFireModule } from '@angular/fire'
import { AngularFireAuthModule } from '@angular/fire/auth'
import { environment } from 'src/environments/environment'
import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './register/register.component'
import { UserComponent } from './user/user.component'
import { AppRoutingModule } from './app-routing.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MatToolbarModule } from '@angular/material'
import { GlobalLoginComponent } from './global-login/global-login.component'
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent, UserComponent, GlobalLoginComponent],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

