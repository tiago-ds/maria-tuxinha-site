import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderAssemblerGroupComponent } from './order-assembler-group.component';
import { MatRadioModule } from '@angular/material/radio';

describe('RadioButtonGroupComponent', () => {
  let component: OrderAssemblerGroupComponent;
  let fixture: ComponentFixture<OrderAssemblerGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrderAssemblerGroupComponent],
      imports: [MatRadioModule],
    }).compileComponents();

    fixture = TestBed.createComponent(OrderAssemblerGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
