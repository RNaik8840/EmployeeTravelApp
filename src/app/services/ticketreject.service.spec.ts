import { TestBed } from '@angular/core/testing';

import { TicketrejectService } from './ticketreject.service';

describe('TicketrejectService', () => {
  let service: TicketrejectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TicketrejectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
