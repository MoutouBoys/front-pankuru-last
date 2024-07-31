import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireSuperAdminComponent } from './formulaire-super-admin.component';

describe('FormulaireSuperAdminComponent', () => {
  let component: FormulaireSuperAdminComponent;
  let fixture: ComponentFixture<FormulaireSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormulaireSuperAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaireSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
