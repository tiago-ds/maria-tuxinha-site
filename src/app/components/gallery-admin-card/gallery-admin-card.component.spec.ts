import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryAdminCardComponent } from './gallery-admin-card.component';

describe('GalleryEditCardComponent', () => {
  let component: GalleryAdminCardComponent;
  let fixture: ComponentFixture<GalleryAdminCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryAdminCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GalleryAdminCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
