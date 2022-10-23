import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Card } from '../../models/Card';

@Component({
  selector: 'txa-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  @Input() list: Card[] = [];
}
