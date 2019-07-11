import { TestBed } from '@angular/core/testing';

import { ListContactService } from './list-contact.service';

describe('ListContactService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListContactService = TestBed.get(ListContactService);
    expect(service).toBeTruthy();
  });
});
