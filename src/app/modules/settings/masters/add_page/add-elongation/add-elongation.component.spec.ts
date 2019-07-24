import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElongationComponent } from './add-elongation.component';

describe('AddElongationComponent', () => {
  let component: AddElongationComponent;
  let fixture: ComponentFixture<AddElongationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddElongationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElongationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
