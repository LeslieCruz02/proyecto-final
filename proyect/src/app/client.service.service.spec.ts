import { TestBed } from '@angular/core/testing';

import { Client.ServiceService } from './client.service.service';

describe('Client.ServiceService', () => {
  let service: Client.ServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Client.ServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
