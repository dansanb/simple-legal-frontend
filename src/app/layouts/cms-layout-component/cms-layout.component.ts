import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';
import {RouterLink, RouterOutlet} from '@angular/router';
import {AsyncPipe, SlicePipe} from '@angular/common';

@Component({
  selector: 'app-app-layout-component',
  imports: [
    RouterOutlet,
    AsyncPipe,
    SlicePipe,
    RouterLink
  ],
  templateUrl: './cms-layout.component.html',
  styleUrl: './cms-layout.component.css'
})
export class CmsLayoutComponent {
  protected readonly document = document;
  constructor(public auth: AuthService) {

  }


}
