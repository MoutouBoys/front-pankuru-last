import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationsVolsComponent } from './reservations-vols.component';

describe('ReservationsVolsComponent', () => {
  let component: ReservationsVolsComponent;
  let fixture: ComponentFixture<ReservationsVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationsVolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationsVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
