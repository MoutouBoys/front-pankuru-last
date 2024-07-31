import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreCompagnieComponent } from './genre-compagnie.component';

describe('GenreCompagnieComponent', () => {
  let component: GenreCompagnieComponent;
  let fixture: ComponentFixture<GenreCompagnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenreCompagnieComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenreCompagnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
