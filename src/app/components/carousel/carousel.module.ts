import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule, SwiperModule],
  exports: [CarouselComponent],
})
export class CarouselModule {}
