import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleCompagnieComponent } from './title-compagnie.component';

describe('TitleCompagnieComponent', () => {
  let component: TitleCompagnieComponent;
  let fixture: ComponentFixture<TitleCompagnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleCompagnieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleCompagnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
