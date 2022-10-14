import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryCardComponent implements OnInit {
  @Input() title = '';
  @Input() category = '';
  @Input() imageSrc = '';

  constructor() {}

  ngOnInit(): void {}
}
