import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminListComponent } from './super-admin-list.component';

describe('SuperAdminListComponent', () => {
  let component: SuperAdminListComponent;
  let fixture: ComponentFixture<SuperAdminListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuperAdminListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperAdminListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
