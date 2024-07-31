import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleSiegeComponent } from './title-siege.component';

describe('TitleSiegeComponent', () => {
  let component: TitleSiegeComponent;
  let fixture: ComponentFixture<TitleSiegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleSiegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleSiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
