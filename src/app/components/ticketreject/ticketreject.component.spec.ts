import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketrejectComponent } from './ticketreject.component';

describe('TicketrejectComponent', () => {
  let component: TicketrejectComponent;
  let fixture: ComponentFixture<TicketrejectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketrejectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketrejectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
