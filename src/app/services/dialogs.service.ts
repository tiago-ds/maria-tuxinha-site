import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddAderecoComponent } from '../components/adereco-dialog/adereco-dialog.component';
import { PhotoDialogComponent } from '../components/photo-dialog/photo-dialog.component';
import { isMobile } from '../utils/screen.utils';

@Injectable({
  providedIn: 'root',
})
export class DialogsService {
  constructor(public dialog: MatDialog) {}

  openAderecoDialog(type: string) {
    this.dialog.open(AddAderecoComponent, {
      panelClass: 'photo-dialog',
      minWidth: isMobile() ? '100vw' : '500px',
      minHeight: isMobile() ? '100vh' : '90vh',
      data: type,
    });
  }

  openGalleryDialog() {
    this.dialog.open(PhotoDialogComponent, {
      panelClass: 'photo-dialog',
      minWidth: isMobile() ? '100vw' : '500px',
      minHeight: isMobile() ? '100vh' : '90vh',
    });
  }
}
