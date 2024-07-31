import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiegeComponent } from './siege.component';

describe('SiegeComponent', () => {
  let component: SiegeComponent;
  let fixture: ComponentFixture<SiegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
