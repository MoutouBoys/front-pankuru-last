import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPassagersComponent } from './list-passagers.component';

describe('ListPassagersComponent', () => {
  let component: ListPassagersComponent;
  let fixture: ComponentFixture<ListPassagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPassagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPassagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
