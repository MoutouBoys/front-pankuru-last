import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TancheAgeComponent } from './tanche-age.component';

describe('TancheAgeComponent', () => {
  let component: TancheAgeComponent;
  let fixture: ComponentFixture<TancheAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TancheAgeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TancheAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
