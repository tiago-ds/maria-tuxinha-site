import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InventoryDialogComponent } from '../components/inventory-dialog/inventory-dialog.component';
import { InventoryDialogData } from '../models/Dialog';
import { isMobile } from '../utils/screen.utils';

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

  openGalleryDialog() {
    this.dialog.open(InventoryDialogComponent, {
      panelClass: 'photo-dialog',
      minWidth: isMobile() ? '100vw' : '500px',
      minHeight: isMobile() ? '100vh' : '90vh',
      data: {
        type: 'photo',
      },
    });
  }
}
