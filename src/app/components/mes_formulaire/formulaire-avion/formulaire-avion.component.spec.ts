import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireAvionComponent } from './formulaire-avion.component';

describe('FormulaireAvionComponent', () => {
  let component: FormulaireAvionComponent;
  let fixture: ComponentFixture<FormulaireAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireAvionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
