import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorMatMiniFabIconButtonComponent } from './color-mat-mini-fab-icon-button-component';

describe('ColorMatMiniFabButtonComponent', () => {
  let component: ColorMatMiniFabIconButtonComponent;
  let fixture: ComponentFixture<ColorMatMiniFabIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorMatMiniFabIconButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorMatMiniFabIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
