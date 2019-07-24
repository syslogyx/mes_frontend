import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessUnitComponent } from './add-process-unit.component';

describe('AddProcessUnitComponent', () => {
  let component: AddProcessUnitComponent;
  let fixture: ComponentFixture<AddProcessUnitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcessUnitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcessUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
