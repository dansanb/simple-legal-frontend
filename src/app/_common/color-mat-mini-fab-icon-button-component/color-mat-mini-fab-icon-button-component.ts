import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'mat-miniFab-icon-button',
  imports: [
    MatIcon,
    MatMiniFabButton,
    MatTooltip
  ],
  templateUrl: './color-mat-mini-fab-icon-button-component.html',
  styleUrl: './color-mat-mini-fab-icon-button-component.css'
})
export class ColorMatMiniFabIconButtonComponent {
  @Input() color: string = "";
  @Input() icon: string = "home";
  @Input() toolTip: string = "";
  @Input() disabled:boolean = false;
  @Output() buttonClick = new EventEmitter<void>();

  onClick() {
    if (!this.disabled) {
      this.buttonClick.emit();
    }

  }
}
