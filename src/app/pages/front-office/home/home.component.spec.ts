import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GalleryService } from 'src/app/services/gallery.service';
import { MockComponent, MockService } from 'ng-mocks';
import { CommonModule } from '@angular/common';
import { GalleryModule } from 'src/app/components/gallery/gallery.module';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CarouselComponent } from 'src/app/components/carousel/carousel.component';
import { CarouselModule } from 'src/app/components/carousel/carousel.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent, MockComponent(CarouselComponent)],
      imports: [
        BrowserAnimationsModule,
        CommonModule,
        GalleryModule,
        CarouselModule,
      ],
      providers: [
        { provide: GalleryService, useValue: MockService(GalleryService) },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
