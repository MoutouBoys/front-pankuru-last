import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitlePersonnelsComponent } from './title-personnels.component';

describe('TitlePersonnelsComponent', () => {
  let component: TitlePersonnelsComponent;
  let fixture: ComponentFixture<TitlePersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitlePersonnelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitlePersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
