import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCodeGroupComponent } from './add-code-group.component';

describe('AddCodeGroupComponent', () => {
  let component: AddCodeGroupComponent;
  let fixture: ComponentFixture<AddCodeGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCodeGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCodeGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
