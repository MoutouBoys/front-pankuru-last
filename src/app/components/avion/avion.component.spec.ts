import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvionComponent } from './avion.component';

describe('AvionComponent', () => {
  let component: AvionComponent;
  let fixture: ComponentFixture<AvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
