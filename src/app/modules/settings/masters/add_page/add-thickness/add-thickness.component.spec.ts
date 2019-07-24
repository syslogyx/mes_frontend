import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThicknessComponent } from './add-thickness.component';

describe('AddThicknessComponent', () => {
  let component: AddThicknessComponent;
  let fixture: ComponentFixture<AddThicknessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddThicknessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThicknessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
