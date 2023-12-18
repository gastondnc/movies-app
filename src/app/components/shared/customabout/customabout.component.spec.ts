import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomaboutComponent } from './customabout.component';

describe('CustomaboutComponent', () => {
  let component: CustomaboutComponent;
  let fixture: ComponentFixture<CustomaboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomaboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomaboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
