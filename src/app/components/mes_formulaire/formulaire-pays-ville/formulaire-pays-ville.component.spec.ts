import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulairePaysVilleComponent } from './formulaire-pays-ville.component';

describe('FormulairePaysVilleComponent', () => {
  let component: FormulairePaysVilleComponent;
  let fixture: ComponentFixture<FormulairePaysVilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulairePaysVilleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulairePaysVilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
