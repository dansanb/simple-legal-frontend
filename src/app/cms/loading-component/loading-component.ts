import {Component} from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Component({
  selector: 'loading-component',
  imports: [
    MatProgressSpinner
  ],
  templateUrl: './loading-component.html',
  styleUrl: './loading-component.css'
})
export class LoadingComponent {

}
