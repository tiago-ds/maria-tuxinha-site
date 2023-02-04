import { Photo } from '../../models/Photo';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { InventoryDialogData } from 'src/app/models/Dialog';
import { DialogsService } from 'src/app/services/dialogs.service';

@Component({
  selector: 'txa-gallery-admin-card',
  templateUrl: './gallery-admin-card.component.html',
  styleUrls: ['./gallery-admin-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryAdminCardComponent implements OnInit {
  @Input() item: Photo | undefined;

  constructor(
    private dialogsService: DialogsService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit(): void {}

  edit() {
    const dialogData = {
      openReason: 'edit',
      photo: this.item,
      type: 'photo',
    } as InventoryDialogData;
    const response = this.dialogsService.openGalleryDialog(dialogData);
    response.afterClosed().subscribe((result) => {
      if (result.success) {
        this.item = result.adereco;
        this.changeDetector.markForCheck();
      }
    });
  }
}
