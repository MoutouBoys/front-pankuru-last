import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleParametreComponent } from './title-parametre.component';

describe('TitleParametreComponent', () => {
  let component: TitleParametreComponent;
  let fixture: ComponentFixture<TitleParametreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitleParametreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleParametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
