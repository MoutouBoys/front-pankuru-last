import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAvionComponent } from './list-avion.component';

describe('ListAvionComponent', () => {
  let component: ListAvionComponent;
  let fixture: ComponentFixture<ListAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListAvionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
