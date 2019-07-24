import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShrinkAgeComponent } from './add-shrink-age.component';

describe('AddShrinkAgeComponent', () => {
  let component: AddShrinkAgeComponent;
  let fixture: ComponentFixture<AddShrinkAgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShrinkAgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShrinkAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
