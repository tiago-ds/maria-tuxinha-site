import { Adereco } from '../../models/Pedido';
import { DialogsService } from '../../services/dialogs.service';
import { AderecoDialogData } from '../../models/Dialog';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'txa-inventory-item-card',
  templateUrl: './inventory-item-card.component.html',
  styleUrls: ['./inventory-item-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InventoryItemCardComponent implements OnInit {
  @Input() item: Adereco | undefined;

  constructor(
    private dialogsService: DialogsService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  edit() {
    const dialogData = {
      openReason: 'edit',
      adereco: this.item,
    } as AderecoDialogData;
    const response = this.dialogsService.openAderecoDialog(dialogData);
    response.afterClosed().subscribe((result) => {
      if (result.success) {
        this.item = result.adereco;
        this.changeDetector.markForCheck();
      }
    });
  }
}
