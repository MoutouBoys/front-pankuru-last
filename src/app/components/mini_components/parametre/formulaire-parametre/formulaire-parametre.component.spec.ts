import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireParametreComponent } from './formulaire-parametre.component';

describe('FormulaireParametreComponent', () => {
  let component: FormulaireParametreComponent;
  let fixture: ComponentFixture<FormulaireParametreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireParametreComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireParametreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
