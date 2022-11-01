import { ConnectionPositionPair } from '@angular/cdk/overlay';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'txa-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryCardComponent implements OnInit {
  @Input() title = '';
  @Input() category = '';
  @Input() imageSrc = '';

  isOverlayOpened = false;
  positionStrategy: any = [
    {
      originX: 'start',
      originY: 'bottom',
      overlayX: 'start',
      overlayY: 'top',
    },
    {
      originX: 'start',
      originY: 'top',
      overlayX: 'start',
      overlayY: 'bottom',
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  toggleOverlay(): void {
    this.isOverlayOpened = !this.isOverlayOpened;
  }
}
