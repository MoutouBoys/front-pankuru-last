import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteneurRightComponent } from './conteneur-right.component';

describe('ConteneurRightComponent', () => {
  let component: ConteneurRightComponent;
  let fixture: ComponentFixture<ConteneurRightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConteneurRightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConteneurRightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
