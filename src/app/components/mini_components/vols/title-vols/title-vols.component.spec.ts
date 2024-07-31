import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleVolsComponent } from './title-vols.component';

describe('TitleVolsComponent', () => {
  let component: TitleVolsComponent;
  let fixture: ComponentFixture<TitleVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleVolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
