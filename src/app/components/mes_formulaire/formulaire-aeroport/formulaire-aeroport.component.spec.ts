import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAeroportComponent } from './formulaire-aeroport.component';

describe('FormulaireAeroportComponent', () => {
  let component: FormulaireAeroportComponent;
  let fixture: ComponentFixture<FormulaireAeroportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireAeroportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireAeroportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
