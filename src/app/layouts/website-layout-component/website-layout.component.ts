import {Component, signal} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-public-layout-component',
  imports: [
    RouterOutlet,
    NgClass,
    RouterLink
  ],
  templateUrl: './website-layout.component.html',
  styleUrl: './website-layout.component.css'
})
export class WebsiteLayoutComponent {
  public isOpen: boolean = false;

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
