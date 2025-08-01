import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsLayoutComponent } from './cms-layout.component';

describe('AppLayoutComponent', () => {
  let component: CmsLayoutComponent;
  let fixture: ComponentFixture<CmsLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CmsLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CmsLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
