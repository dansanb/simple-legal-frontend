import {Component, Input} from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'logout-button-component',
  imports: [],
  templateUrl: './logout-button-component.html',
  styleUrl: './logout-button-component.css'
})
export class LogoutButtonComponent {

  @Input() class: string = '';

  constructor(public auth: AuthService) {
  }

  handleLogout() {
    this.auth.logout({logoutParams: { returnTo: document.location.origin }})
  }
}
