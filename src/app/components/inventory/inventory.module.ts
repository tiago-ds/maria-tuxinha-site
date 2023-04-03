import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryDialogComponent } from './inventory-dialog/inventory-dialog.component';
import { InventoryItemCardComponent } from './inventory-item-card/inventory-item-card.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [InventoryDialogComponent, InventoryItemCardComponent],
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [InventoryDialogComponent, InventoryItemCardComponent],
})
export class InventoryModule {}
