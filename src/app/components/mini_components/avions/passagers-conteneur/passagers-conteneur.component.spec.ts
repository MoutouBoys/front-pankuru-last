import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassagersConteneurComponent } from './passagers-conteneur.component';

describe('PassagersConteneurComponent', () => {
  let component: PassagersConteneurComponent;
  let fixture: ComponentFixture<PassagersConteneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassagersConteneurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassagersConteneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
