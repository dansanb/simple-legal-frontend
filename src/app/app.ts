import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public isOpen: boolean = false;
  protected readonly title = signal('simple-legal-frontend');

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
