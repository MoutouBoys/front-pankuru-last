import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireReponsesFaqComponent } from './formulaire-reponses-faq.component';

describe('FormulaireReponsesFaqComponent', () => {
  let component: FormulaireReponsesFaqComponent;
  let fixture: ComponentFixture<FormulaireReponsesFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireReponsesFaqComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireReponsesFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
