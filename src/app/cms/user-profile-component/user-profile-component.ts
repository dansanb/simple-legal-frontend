import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {AsyncPipe} from '@angular/common';

@Component({
  selector: 'app-user-profile-component',
  imports: [
    AsyncPipe
  ],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.css'
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {
  }

}
