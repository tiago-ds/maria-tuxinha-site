import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
  SwiperOptions,
  Virtual,
} from 'swiper';

SwiperCore.use([Pagination, Autoplay]);

@Component({
  selector: 'txa-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarouselComponent implements OnInit {
  @Input() list: any[] = [];

  config: SwiperOptions = {
    slidesPerView: 1,
    pagination: { clickable: true },
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  };

  constructor() {}

  ngOnInit(): void {}

  onSlideChange() {
    // console.log('slide change');
  }
}
