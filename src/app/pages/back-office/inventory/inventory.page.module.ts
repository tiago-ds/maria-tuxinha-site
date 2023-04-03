import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryPage } from './inventory.page';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import {
  BrowserAnimationsModule,
  NoopAnimationsModule,
} from '@angular/platform-browser/animations';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';
import { InventoryModule } from 'src/app/components/inventory/inventory.module';

@NgModule({
  declarations: [InventoryPage],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatTabsModule,
    MatIconModule,
    GalleryModule,
    InventoryModule,
  ],
})
export class InventoryPageModule {}
