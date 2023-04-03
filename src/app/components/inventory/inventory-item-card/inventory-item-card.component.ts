import { Adereco } from '../../../models/Pedido';
import { DialogsService } from '../../../services/dialogs.service';
import { InventoryDialogData } from '../../../models/Dialog';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { getThumbnailPictureUrl } from 'src/app/utils/aderecoUtils';

@Component({
  selector: 'txa-inventory-item-card',
  templateUrl: './inventory-item-card.component.html',
  styleUrls: ['./inventory-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryItemCardComponent implements OnInit {
  @Input() item: Adereco = {} as Adereco;

  constructor(
    private dialogsService: DialogsService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  edit() {
    const dialogData = {
      openReason: 'edit',
      adereco: this.item,
      type: 'adereco',
    } as InventoryDialogData;
    const response = this.dialogsService.openAderecoDialog(dialogData);
    response.afterClosed().subscribe((result) => {
      if (result.success) {
        this.item = result.adereco;
        this.changeDetector.markForCheck();
      }
    });
  }

  get pictureUrl(): string {
    if (this.item) {
      return getThumbnailPictureUrl(this.item.pictureId, 400);
    }
    return '';
  }
}
