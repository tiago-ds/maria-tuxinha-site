import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GalleryService } from 'src/app/services/gallery.service';
import { MockService } from 'ng-mocks';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { CommonModule } from '@angular/common';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [CommonModule, CarouselModule, GalleryModule],
      providers: [
        { provide: GalleryService, useValue: MockService(GalleryService) },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
