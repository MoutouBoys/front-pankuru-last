import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePersonnelsComponent } from './formulaire-personnels.component';

describe('FormulairePersonnelsComponent', () => {
  let component: FormulairePersonnelsComponent;
  let fixture: ComponentFixture<FormulairePersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulairePersonnelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairePersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
