import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements

@NgModule({
  declarations: [CarouselComponent],
  imports: [CommonModule],
  exports: [CarouselComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CarouselModule {
  constructor() {
    // register Swiper custom elements
    register();
  }
}
