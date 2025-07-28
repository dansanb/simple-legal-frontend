import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-home-component',
  imports: [
    RouterLink
  ],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css'
})
export class HomeComponent {
  constructor(public auth: AuthService) {
  }

}
