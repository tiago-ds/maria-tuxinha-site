import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAdminCardComponent } from './gallery-admin-card.component';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MockService } from 'ng-mocks';

describe('GalleryEditCardComponent', () => {
  let component: GalleryAdminCardComponent;
  let fixture: ComponentFixture<GalleryAdminCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryAdminCardComponent],
      providers: [
        { provide: DialogsService, useValue: MockService(DialogsService) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryAdminCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
