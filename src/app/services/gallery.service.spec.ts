import { TestBed } from '@angular/core/testing';

import { GalleryService } from './gallery.service';
import { HttpClient } from '@angular/common/http';
import { MockComponent, MockService } from 'ng-mocks';
import { OrderAssemblerItemComponent } from '../components/order-assembler/order-assembler-item/order-assembler-item.component';

describe('GalleryService', () => {
  let service: GalleryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpClient,
          useValue: MockService(HttpClient),
        },
        {
          provide: OrderAssemblerItemComponent,
          useValue: MockComponent(OrderAssemblerItemComponent),
        },
      ],
    });
    service = TestBed.inject(GalleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
