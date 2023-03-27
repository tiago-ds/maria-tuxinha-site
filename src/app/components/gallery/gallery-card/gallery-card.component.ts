import { ConnectionPositionPair } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
  ViewChild,
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
  @ViewChild('trigger') image: HTMLImageElement = {} as HTMLImageElement;

  isOverlayOpened = false;
  isImageLoaded = false;
  imageHelper: HTMLImageElement = {} as HTMLImageElement;
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
  constructor(private changeDetector: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.imageHelper = new Image();
    this.imageHelper.referrerPolicy = 'no-referrer';
    this.imageHelper.onload = () => {
      this.isImageLoaded = true;
      this.changeDetector.detectChanges();
    };
    this.imageHelper.src = this.imageSrc;
  }

  toggleOverlay(): void {
    this.isOverlayOpened = !this.isOverlayOpened;
  }
}
