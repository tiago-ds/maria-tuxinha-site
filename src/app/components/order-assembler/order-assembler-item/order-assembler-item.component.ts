import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Adereco } from 'src/app/models/Pedido';
import {
  getThumbnailPictureUrl,
  parseDriveId,
} from 'src/app/utils/aderecoUtils';

@Component({
  selector: 'txa-order-assembler-item',
  templateUrl: './order-assembler-item.component.html',
  styleUrls: ['./order-assembler-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderAssemblerItemComponent implements OnInit {
  @Input() option: Adereco = {} as Adereco;
  @Input() isSelected = false;

  imageHelper: HTMLImageElement = {} as HTMLImageElement;
  isImageLoaded = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.imageHelper = new Image();
    this.imageHelper.referrerPolicy = 'no-referrer';
    this.imageHelper.onload = () => {
      this.isImageLoaded = true;
      this.changeDetectorRef.detectChanges();
    };
    this.imageHelper.src = getThumbnailPictureUrl(this.option.pictureId, 100);
  }
}
