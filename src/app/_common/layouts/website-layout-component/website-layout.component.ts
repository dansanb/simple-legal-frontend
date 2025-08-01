import {Component} from '@angular/core';
import {NavigationStart, Router,  RouterLink, RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';
import {LoginButtonComponent} from '../../login-button-component/login-button-component';

@Component({
  selector: 'app-public-layout-component',
  imports: [
    RouterOutlet,
    NgClass,
    RouterLink,
    LoginButtonComponent
  ],
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.css'
})
export class WebsiteLayoutComponent {
  public isOpen: boolean = false;

  constructor(public router: Router) {
    router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isOpen = false;
      }
    });
  }

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
