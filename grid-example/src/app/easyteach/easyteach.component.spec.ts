import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EasyteachComponent } from './easyteach.component';

describe('EasyteachComponent', () => {
  let component: EasyteachComponent;
  let fixture: ComponentFixture<EasyteachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EasyteachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EasyteachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
