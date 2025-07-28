import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'login-button-component',
  imports: [],
  templateUrl: './login-button-component.html',
  styleUrl: './login-button-component.css'
})
export class LoginButtonComponent {
  constructor(public auth: AuthService) {
  }

  handleLogin() {
    this.auth.loginWithRedirect({
      appState: {
        target: '/app',
      }
    });
  }
}
