import {Component, Input} from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'loading-component',
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './loading-component.html',
  styleUrl: './loading-component.css'
})
export class LoadingComponent {
  @Input() message:string = 'Loading';

}
