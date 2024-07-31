import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeVolsComponent } from './liste-vols.component';

describe('ListeVolsComponent', () => {
  let component: ListeVolsComponent;
  let fixture: ComponentFixture<ListeVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeVolsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
