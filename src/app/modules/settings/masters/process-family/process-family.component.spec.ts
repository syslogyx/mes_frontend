import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessFamilyComponent } from './process-family.component';

describe('ProcessFamilyComponent', () => {
  let component: ProcessFamilyComponent;
  let fixture: ComponentFixture<ProcessFamilyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessFamilyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessFamilyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
