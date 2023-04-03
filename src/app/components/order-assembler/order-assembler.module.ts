import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { OrderAssemblerGroupComponent } from './order-assembler-group/order-assembler-group.component';
import { OrderAssemblerItemComponent } from './order-assembler-item/order-assembler-item.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [OrderAssemblerGroupComponent, OrderAssemblerItemComponent],
  imports: [
    CommonModule,
    MatRadioModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [OrderAssemblerGroupComponent, OrderAssemblerItemComponent],
})
export class OrderAssemblerModule {}
