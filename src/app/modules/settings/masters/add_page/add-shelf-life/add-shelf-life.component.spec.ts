import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShelfLifeComponent } from './add-shelf-life.component';

describe('AddShelfLifeComponent', () => {
  let component: AddShelfLifeComponent;
  let fixture: ComponentFixture<AddShelfLifeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShelfLifeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShelfLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
