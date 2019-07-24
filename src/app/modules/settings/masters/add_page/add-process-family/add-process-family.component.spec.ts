import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProcessFamilyComponent } from './add-process-family.component';

describe('AddProcessFamilyComponent', () => {
  let component: AddProcessFamilyComponent;
  let fixture: ComponentFixture<AddProcessFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcessFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProcessFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
