import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusRolesComponent } from './status-roles-component';

describe('StatusRolesComponent', () => {
  let component: StatusRolesComponent;
  let fixture: ComponentFixture<StatusRolesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatusRolesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
