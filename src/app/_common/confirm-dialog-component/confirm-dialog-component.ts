import {ChangeDetectionStrategy, Component, inject, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export interface ConfirmDialogData {
  title: string;
  message: string;
  yesText: string;
  noText: string;
}

@Component({
  selector: 'app-confirm-dialog-component',
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogTitle, MatDialogContent],
  templateUrl: './confirm-dialog-component.html',
  styleUrl: './confirm-dialog-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmDialogComponent {
  readonly dialogRef = inject(MatDialogRef<ConfirmDialogComponent>);
  readonly data = inject<ConfirmDialogData>(MAT_DIALOG_DATA);
  readonly title = this.data.title ? this.data.title : 'Confirm';
  readonly message = this.data.message ? this.data.message : 'Are you sure?';
  readonly yesText = this.data.yesText ? this.data.yesText : 'Yes';
  readonly noText = this.data.noText ? this.data.noText : 'No';


  onYesClick() {

  }

  onNoClick() {
    this.dialogRef.close();
  }
}
