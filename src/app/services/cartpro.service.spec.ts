import { TestBed } from '@angular/core/testing';

import { CartproService } from './cartpro.service';

describe('CartproService', () => {
  let service: CartproService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartproService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
