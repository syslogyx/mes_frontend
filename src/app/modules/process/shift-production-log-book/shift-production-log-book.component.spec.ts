import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftProductionLogBookComponent } from './shift-production-log-book.component';

describe('ShiftProductionLogBookComponent', () => {
  let component: ShiftProductionLogBookComponent;
  let fixture: ComponentFixture<ShiftProductionLogBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftProductionLogBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftProductionLogBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
