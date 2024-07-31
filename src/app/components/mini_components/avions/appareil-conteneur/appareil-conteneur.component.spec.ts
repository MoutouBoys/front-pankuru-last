import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppareilConteneurComponent } from './appareil-conteneur.component';

describe('AppareilConteneurComponent', () => {
  let component: AppareilConteneurComponent;
  let fixture: ComponentFixture<AppareilConteneurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppareilConteneurComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppareilConteneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
