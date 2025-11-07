import { TestBed } from '@angular/core/testing';

import { DataSource } from './data-source';
import { DessinType } from './model/dessin-type';

describe('DataSource', () => {
  let service: DataSource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  /*
  it('should add new dessin', () => {
    const draft: DessinType = new DessinType();
    expect(draft.size).toBe(0);
  });
  */
});