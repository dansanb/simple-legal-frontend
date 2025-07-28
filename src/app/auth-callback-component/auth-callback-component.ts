import { Component } from '@angular/core';
import {LoginButtonComponent} from '../website/login-button-component/login-button-component';
import {LoadingComponent} from '../cms/loading-component/loading-component';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth-callback-component',
  imports: [
    LoadingComponent
  ],
  templateUrl: './auth-callback-component.html',
  styleUrl: './auth-callback-component.css'
})
export class AuthCallbackComponent {
  constructor(public auth:AuthService) {
  }

}
