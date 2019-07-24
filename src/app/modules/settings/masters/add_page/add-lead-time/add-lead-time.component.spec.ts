import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddLeadTimeComponent } from './add-lead-time.component';

describe('AddLeadTimeComponent', () => {
  let component: AddLeadTimeComponent;
  let fixture: ComponentFixture<AddLeadTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddLeadTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeadTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
