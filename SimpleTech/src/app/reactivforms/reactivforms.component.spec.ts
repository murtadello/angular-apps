import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivformsComponent } from './reactivforms.component';

describe('ReactivformsComponent', () => {
  let component: ReactivformsComponent;
  let fixture: ComponentFixture<ReactivformsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivformsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
