import { TestBed } from '@angular/core/testing';

import { ProductsResolverService } from './products-resolver.service';

describe('ProductsResolverService', () => {
  let service: ProductsResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
