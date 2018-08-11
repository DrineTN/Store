import { TestBed, inject } from '@angular/core/testing';

import { ProductrepositoryService } from './productrepository.service';

describe('ProductrepositoryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductrepositoryService]
    });
  });

  it('should be created', inject([ProductrepositoryService], (service: ProductrepositoryService) => {
    expect(service).toBeTruthy();
  }));
});
