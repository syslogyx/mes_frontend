import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUnitInchargeComponent } from './add-unit-incharge.component';

describe('AddUnitInchargeComponent', () => {
  let component: AddUnitInchargeComponent;
  let fixture: ComponentFixture<AddUnitInchargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUnitInchargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUnitInchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
