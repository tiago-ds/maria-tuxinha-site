import { TestBed } from '@angular/core/testing';

import { DialogsService } from './dialogs.service';
import { InventoryDialogComponent } from '../components/inventory-dialog/inventory-dialog.component';
import { MockComponent, MockService } from 'ng-mocks';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

describe('DialogsService', () => {
  let service: DialogsService;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [MatIconModule],
      providers: [
        {
          provide: InventoryDialogComponent,
          useValue: MockComponent(InventoryDialogComponent),
        },
        {
          provide: MatDialog,
          useValue: MockService(MatDialog),
        },
      ],
    });
    service = TestBed.inject(DialogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
