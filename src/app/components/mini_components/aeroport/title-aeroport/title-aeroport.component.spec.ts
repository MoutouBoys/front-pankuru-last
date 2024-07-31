import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAeroportComponent } from './title-aeroport.component';

describe('TitleAeroportComponent', () => {
  let component: TitleAeroportComponent;
  let fixture: ComponentFixture<TitleAeroportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleAeroportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAeroportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
