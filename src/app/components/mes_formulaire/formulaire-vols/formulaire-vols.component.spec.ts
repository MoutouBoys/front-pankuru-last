import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireVolsComponent } from './formulaire-vols.component';

describe('FormulaireVolsComponent', () => {
  let component: FormulaireVolsComponent;
  let fixture: ComponentFixture<FormulaireVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireVolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
