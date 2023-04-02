import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryComponent } from './inventory.component';
import { AderecoService } from 'src/app/services/adereco.service';
import { MockService } from 'ng-mocks';
import { GalleryService } from 'src/app/services/gallery.service';
import { DialogsService } from 'src/app/services/dialogs.service';

describe('AdminComponent', () => {
  let component: InventoryComponent;
  let fixture: ComponentFixture<InventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryComponent],
      providers: [
        { provide: AderecoService, useValue: MockService(AderecoService) },
        { provide: GalleryService, useValue: MockService(GalleryService) },
        { provide: DialogsService, useValue: MockService(DialogsService) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
