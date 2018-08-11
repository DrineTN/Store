import { TestBed, inject } from '@angular/core/testing';

import { StaticdatasourceService } from './staticdatasource.service';

describe('StaticdatasourceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StaticdatasourceService]
    });
  });

  it('should be created', inject([StaticdatasourceService], (service: StaticdatasourceService) => {
    expect(service).toBeTruthy();
  }));
});
