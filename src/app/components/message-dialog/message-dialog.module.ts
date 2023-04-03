import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageDialogComponent } from './message-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [MessageDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class MessageDialogModule {}
