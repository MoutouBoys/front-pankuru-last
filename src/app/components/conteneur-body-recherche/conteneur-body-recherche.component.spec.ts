import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteneurBodyRechercheComponent } from './conteneur-body-recherche.component';

describe('ConteneurBodyRechercheComponent', () => {
  let component: ConteneurBodyRechercheComponent;
  let fixture: ComponentFixture<ConteneurBodyRechercheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteneurBodyRechercheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteneurBodyRechercheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
