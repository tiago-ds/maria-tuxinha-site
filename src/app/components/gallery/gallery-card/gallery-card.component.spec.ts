import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryCardComponent } from './gallery-card.component';

describe('GalleryCardComponent', () => {
  let component: GalleryCardComponent;
  let fixture: ComponentFixture<GalleryCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
