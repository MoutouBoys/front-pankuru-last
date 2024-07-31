import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleAvionComponent } from './title-avion.component';

describe('TitleAvionComponent', () => {
  let component: TitleAvionComponent;
  let fixture: ComponentFixture<TitleAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleAvionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
