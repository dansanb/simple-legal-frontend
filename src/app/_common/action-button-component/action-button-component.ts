import {Component, EventEmitter, Input, Output} from '@angular/core';
import {MatMiniFabButton} from '@angular/material/button';
import {MatIcon} from '@angular/material/icon';
import {MatTooltip} from '@angular/material/tooltip';

@Component({
  selector: 'action-button',
  imports: [
    MatIcon,
    MatMiniFabButton,
    MatTooltip
  ],
  templateUrl: './action-button-component.html',
  styleUrl: './action-button-component.css'
})
export class ActionButtonComponent {
  @Input() color: string = "";
  @Input() icon: string = "home";
  @Input() toolTip: string = "";
  @Input() disabled: boolean = false;
  @Output() click = new EventEmitter<void>();

  onClick(event: Event) {
    // prevent multiple 'click' events to fire
    event.stopPropagation();
    if (!this.disabled) {
      this.click.emit();
    }

  }
}
