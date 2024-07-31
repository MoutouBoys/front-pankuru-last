import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPersonnelsComponent } from './categories-personnels.component';

describe('CategoriesPersonnelsComponent', () => {
  let component: CategoriesPersonnelsComponent;
  let fixture: ComponentFixture<CategoriesPersonnelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesPersonnelsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesPersonnelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
