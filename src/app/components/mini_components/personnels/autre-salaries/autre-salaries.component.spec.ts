import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutreSalariesComponent } from './autre-salaries.component';

describe('AutreSalariesComponent', () => {
  let component: AutreSalariesComponent;
  let fixture: ComponentFixture<AutreSalariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutreSalariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutreSalariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
