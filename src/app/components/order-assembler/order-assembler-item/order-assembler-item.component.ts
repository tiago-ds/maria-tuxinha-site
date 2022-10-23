import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'txa-order-assembler-item',
  templateUrl: './order-assembler-item.component.html',
  styleUrls: ['./order-assembler-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderAssemblerItemComponent {
  @Input() option: any;
  @Input() isSelected = false;
}
