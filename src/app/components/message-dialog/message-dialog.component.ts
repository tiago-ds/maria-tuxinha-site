import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'txa-message-dialog',
  templateUrl: './message-dialog.component.html',
  styleUrls: ['./message-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MessageDialogComponent implements OnInit {
  message: string;

  constructor(@Inject(MAT_DIALOG_DATA) public dialogData: any) {
    this.message = dialogData.message;
  }

  ngOnInit(): void {}
}
