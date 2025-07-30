import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {AsyncPipe} from '@angular/common';
import {LoadingComponent} from '../../_common/loading-component/loading-component';

@Component({
  selector: 'app-user-profile-component',
  imports: [
    AsyncPipe,
    LoadingComponent,
  ],
  templateUrl: './user-profile-component.html',
  styleUrl: './user-profile-component.css'
})
export class UserProfileComponent {
  constructor(public auth: AuthService) {
  }

}
