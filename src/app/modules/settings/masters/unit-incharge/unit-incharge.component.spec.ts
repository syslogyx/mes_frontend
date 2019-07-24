import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitInchargeComponent } from './unit-incharge.component';

describe('UnitInchargeComponent', () => {
  let component: UnitInchargeComponent;
  let fixture: ComponentFixture<UnitInchargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitInchargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitInchargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
