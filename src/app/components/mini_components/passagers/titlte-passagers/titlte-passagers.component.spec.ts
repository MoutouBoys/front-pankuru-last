import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitltePassagersComponent } from './titlte-passagers.component';

describe('TitltePassagersComponent', () => {
  let component: TitltePassagersComponent;
  let fixture: ComponentFixture<TitltePassagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitltePassagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitltePassagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
