import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InventoryDialogComponent } from '../components/inventory/inventory-dialog/inventory-dialog.component';
import { InventoryDialogData } from '../models/Dialog';
import { isMobile } from '../utils/screen.utils';
import { MessageDialogComponent } from '../components/message-dialog/message-dialog.component';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  constructor(public dialog: MatDialog) {}

  openAderecoDialog(
    dialodData: InventoryDialogData
  ): MatDialogRef<InventoryDialogComponent> {
    return this.dialog.open(InventoryDialogComponent, {
      panelClass: 'photo-dialog',
      minWidth: isMobile() ? '100vw' : '500px',
      minHeight: isMobile() ? '100vh' : '90vh',
      data: dialodData,
    });
  }

  openGalleryDialog(
    dialodData: InventoryDialogData
  ): MatDialogRef<InventoryDialogComponent> {
    return this.dialog.open(InventoryDialogComponent, {
      panelClass: 'photo-dialog',
      minWidth: isMobile() ? '100vw' : '500px',
      minHeight: isMobile() ? '100vh' : '90vh',
      data: dialodData,
    });
  }

  openSuccessDialog(dialodData: any): MatDialogRef<MessageDialogComponent> {
    return this.dialog.open(MessageDialogComponent, {
      panelClass: 'photo-dialog',
      data: dialodData,
    });
  }
}
