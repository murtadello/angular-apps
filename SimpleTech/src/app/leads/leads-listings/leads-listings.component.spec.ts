import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeadsListingsComponent } from './leads-listings.component';

describe('LeadsListingsComponent', () => {
  let component: LeadsListingsComponent;
  let fixture: ComponentFixture<LeadsListingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeadsListingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeadsListingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
