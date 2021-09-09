import { TestBed } from '@angular/core/testing';

import { Client.Service.Spec.TsService } from './client.service.spec.ts.service';

describe('Client.Service.Spec.TsService', () => {
  let service: Client.Service.Spec.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Client.Service.Spec.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
