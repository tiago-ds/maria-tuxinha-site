import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAssemblerItemComponent } from './order-assembler-item.component';

describe('RadioButtonComponent', () => {
  let component: OrderAssemblerItemComponent;
  let fixture: ComponentFixture<OrderAssemblerItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderAssemblerItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderAssemblerItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
