import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTrimmingComponent } from './add-trimming.component';

describe('AddTrimmingComponent', () => {
  let component: AddTrimmingComponent;
  let fixture: ComponentFixture<AddTrimmingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTrimmingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrimmingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
