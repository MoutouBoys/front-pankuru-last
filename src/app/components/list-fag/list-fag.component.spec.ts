import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFagComponent } from './list-fag.component';

describe('ListFagComponent', () => {
  let component: ListFagComponent;
  let fixture: ComponentFixture<ListFagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListFagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListFagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
