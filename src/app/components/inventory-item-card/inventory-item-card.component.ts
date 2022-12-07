import { Adereco } from '../../models/Pedido';
import {
  ChangeDetectionStrategy,
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

  constructor() {}

  ngOnInit(): void {}
}
