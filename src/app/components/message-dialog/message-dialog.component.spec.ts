import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageDialogComponent } from './message-dialog.component';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { OrderAssemblerItemComponent } from '../order-assembler/order-assembler-item/order-assembler-item.component';
import { MockComponent } from 'ng-mocks';

describe('MessageDialogComponent', () => {
  let component: MessageDialogComponent;
  let fixture: ComponentFixture<MessageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessageDialogComponent],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: { message: 'Test Message' } },
        {
          provide: OrderAssemblerItemComponent,
          useValue: MockComponent(OrderAssemblerItemComponent),
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MessageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
