import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryItemCardComponent } from './inventory-item-card.component';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MockService } from 'ng-mocks';
import { MatTabsModule } from '@angular/material/tabs';

describe('InventoryItemCardComponent', () => {
  let component: InventoryItemCardComponent;
  let fixture: ComponentFixture<InventoryItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryItemCardComponent],
      imports: [MatTabsModule],
      providers: [
        { provide: DialogsService, useValue: MockService(DialogsService) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
