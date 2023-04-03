import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAdminCardComponent } from './gallery-admin-card.component';
import { DialogsService } from 'src/app/services/dialogs.service';
import { MockService } from 'ng-mocks';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

describe('GalleryEditCardComponent', () => {
  let component: GalleryAdminCardComponent;
  let fixture: ComponentFixture<GalleryAdminCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryAdminCardComponent],
      imports: [MatCardModule, MatIconModule],
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
