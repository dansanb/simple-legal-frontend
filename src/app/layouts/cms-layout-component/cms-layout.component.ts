import { Component } from '@angular/core';
import {AuthService} from '@auth0/auth0-angular';

@Component({
  selector: 'app-app-layout-component',
  imports: [],
  templateUrl: './cms-layout.component.html',
  styleUrl: './cms-layout.component.css'
})
export class CmsLayoutComponent {
  protected readonly document = document;
  constructor(public auth: AuthService) {

  }


}
