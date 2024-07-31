import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAeroportComponent } from './list-aeroport.component';

describe('ListAeroportComponent', () => {
  let component: ListAeroportComponent;
  let fixture: ComponentFixture<ListAeroportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAeroportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAeroportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
