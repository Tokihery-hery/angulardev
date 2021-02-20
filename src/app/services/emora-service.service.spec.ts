import { TestBed } from '@angular/core/testing';

import { EmoraServiceService } from './emora-service.service';

describe('EmoraServiceService', () => {
  let service: EmoraServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmoraServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
