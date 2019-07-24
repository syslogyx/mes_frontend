import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDprTargetComponent } from './add-dpr-target.component';

describe('AddDprTargetComponent', () => {
  let component: AddDprTargetComponent;
  let fixture: ComponentFixture<AddDprTargetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDprTargetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDprTargetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
