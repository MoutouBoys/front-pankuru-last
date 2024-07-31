import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiegeConteneurComponent } from './siege-conteneur.component';

describe('SiegeConteneurComponent', () => {
  let component: SiegeConteneurComponent;
  let fixture: ComponentFixture<SiegeConteneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiegeConteneurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiegeConteneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
