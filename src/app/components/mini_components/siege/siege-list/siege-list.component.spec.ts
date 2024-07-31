import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiegeListComponent } from './siege-list.component';

describe('SiegeListComponent', () => {
  let component: SiegeListComponent;
  let fixture: ComponentFixture<SiegeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiegeListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiegeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
