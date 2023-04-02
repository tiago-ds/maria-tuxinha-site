import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryComponent } from './gallery.component';
import { GalleryCardComponent } from './gallery-card/gallery-card.component';
import { GalleryAdminCardComponent } from './gallery-admin-card/gallery-admin-card.component';
import { MatCardModule } from '@angular/material/card';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { NgxMaskModule } from 'ngx-mask';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
  declarations: [
    GalleryComponent,
    GalleryCardComponent,
    GalleryAdminCardComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    NgxSkeletonLoaderModule,
    OverlayModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [GalleryComponent, GalleryCardComponent, GalleryAdminCardComponent],
})
export class GalleryModule {}
