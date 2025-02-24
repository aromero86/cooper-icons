import { TestBed } from '@angular/core/testing';

import { CooperIconsService } from './cooper-icons.service';

describe('CooperIconsService', () => {
  let service: CooperIconsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CooperIconsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
