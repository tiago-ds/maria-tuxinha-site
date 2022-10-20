import { FormGroup } from '@angular/forms';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'txa-order-assembler-group',
  templateUrl: './order-assembler-group.component.html',
  styleUrls: ['./order-assembler-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderAssemblerGroupComponent implements OnInit {
  @Input() currentSelection: any = null;
  @Input() optionList: any[] = [];
  @Input() formName: string = '';
  @Input() formGroup: FormGroup = {} as FormGroup;

  constructor() {}

  ngOnInit(): void {}

  onOptionChange(event: any): void {
    this.formGroup.get(this.formName)?.setValue(event.source._value);

    this.currentSelection = event.source._value;
  }
}
