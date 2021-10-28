import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettinsConatactComponent } from './settins-conatact.component';

describe('SettinsConatactComponent', () => {
  let component: SettinsConatactComponent;
  let fixture: ComponentFixture<SettinsConatactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettinsConatactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettinsConatactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
