import { TestBed } from '@angular/core/testing';

import { RouteresolverResolver } from './routeresolver.resolver';

describe('RouteresolverResolver', () => {
  let resolver: RouteresolverResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RouteresolverResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
