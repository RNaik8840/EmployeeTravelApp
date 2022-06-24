import { TestBed } from '@angular/core/testing';

import { TicketstatusService } from './ticketstatus.service';

describe('TicketstatusService', () => {
  let service: TicketstatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketstatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
