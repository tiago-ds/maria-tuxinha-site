import { Photo } from '../../models/Photo';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'txa-gallery-admin-card',
  templateUrl: './gallery-admin-card.component.html',
  styleUrls: ['./gallery-admin-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryAdminCardComponent implements OnInit {
  @Input() item: Photo | undefined;

  constructor() {}

  ngOnInit(): void {}
}
