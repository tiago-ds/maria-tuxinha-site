import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryPage } from './inventory.page';
import { AderecoService } from 'src/app/services/adereco.service';
import { MockService } from 'ng-mocks';
import { GalleryService } from 'src/app/services/gallery.service';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

describe('InventoryPage', () => {
  let component: InventoryPage;
  let fixture: ComponentFixture<InventoryPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InventoryPage],
      imports: [
        MatTabsModule,
        MatIconModule,
        BrowserModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: AderecoService, useValue: MockService(AderecoService) },
        { provide: GalleryService, useValue: MockService(GalleryService) },
        { provide: DialogsService, useValue: MockService(DialogsService) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(InventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
