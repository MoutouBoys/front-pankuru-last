import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSiegeComponent } from './formulaire-siege.component';

describe('FormulaireSiegeComponent', () => {
  let component: FormulaireSiegeComponent;
  let fixture: ComponentFixture<FormulaireSiegeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireSiegeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireSiegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
